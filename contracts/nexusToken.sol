// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.16;


import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol";
import "./ERC2981.sol";


contract Marketplace is  ERC721URIStorage, ReentrancyGuard, ERC2981 {
    constructor() ERC721("MYNFT", "MNT") {
        // _setRoyaltyRecipient(msg.sender);
    }

    


    using Counters for Counters.Counter;
    Counters.Counter private _totalItems;
    Counters.Counter private tokenIds;
    Counters.Counter private _itemsSold;

    event BideOnSellIsMade(
        uint256 tokenId,
        uint256 bidPrice,
        address bidder,
        uint timestamp
    );
    event BidEdited(
        uint256 indexed itemId,
        uint256 bidPrice,
        uint256 time,
        address indexed bidder
    );
    event Sold(
        uint256 indexed itemId,
        uint256 price,
        uint256 soldTime,
        address indexed seller,
        address indexed buyer
    );
    event MarketItemCreated(uint256 tokenId, address sender, uint256 timestamp);
    event EventCanceled(uint256 indexed tokenId, address indexed seller);

    enum TokenStatus {
        DEFAULT,
        ACTIVE,
        ONSELL,
        ONAUCTION,
        BURNED
    }
    enum SaleStatus {
        DEFAULT,
        ACTIVE,
        SOLD,
        CANCELLED
    }
    struct SaleOrder {
        address payable seller;
        address payable owner;
        uint256 price;
        uint256 royality;
        uint bidAmount;
        SaleStatus status;
    }
    struct BidedOnSaleOrder{
        address bidder;
        uint256 bidPrice;
    }


    mapping(uint256 => TokenStatus) public _idToItemStatus;
    mapping(uint => bool) public _idToRoyalityStatus;
    mapping(uint256 => SaleOrder) public _idToSaleOrder;

    mapping(uint => mapping(uint => address)) private _idToIndexwiseAddress; // tokendId to index to Address
    mapping(uint => mapping(address => BidedOnSaleOrder)) private _idToAddressToBidedOnOrder; //tokenId to Addres to Struct


    modifier isActive(uint256 tokenId) {
        require(
            _idToItemStatus[tokenId] == TokenStatus.ACTIVE,
            "Marketplace: This NFT has already been put up for sale or auction!"
        );
        _;
    }

    function createItem(string memory tokenURI, uint96 royaltyFee) external payable {
        require(royaltyFee <= 1000, "Royality can't be greater than 10%");
        _totalItems.increment();
        tokenIds.increment();

        uint256 tokenId = tokenIds.current();
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
        if(royaltyFee > 0){
            _setTokenRoyalty(tokenId, msg.sender, royaltyFee);
            _idToRoyalityStatus[tokenId] = true;
        }
        _idToItemStatus[tokenId] = TokenStatus.ACTIVE;
        emit MarketItemCreated(tokenId, msg.sender, block.timestamp);
    }


    function listItem(uint256 tokenId, uint256 price) public isActive(tokenId) {
        address owner = ownerOf(tokenId);
        require(msg.sender == owner, "Only owner can list Item");
        _transfer(owner, address(this), tokenId);
        _idToItemStatus[tokenId] = TokenStatus.ONSELL;
        ( , uint royaltyAmount) = royaltyInfo(tokenId, price);
        _idToSaleOrder[tokenId] = SaleOrder(
            payable(msg.sender),
            payable(owner),
            price,
            royaltyAmount,
            0,
            SaleStatus.ACTIVE
        );
    }
    

    function buyItem(uint256 tokenId) external payable nonReentrant {
        SaleOrder storage order = _idToSaleOrder[tokenId];
        require(msg.sender != order.owner, "Owner Can't buy");
        require(order.status == SaleStatus.ACTIVE, "NOT FOR SELL");
        require(
            msg.value >= order.price,
            "price should be equal to price of NFT"
        );

        address payable sendTo = order.owner;
        if(_idToRoyalityStatus[tokenId]){
            (address artist, uint royaltyAmount) = royaltyInfo(tokenId, order.price);
            payable(artist).transfer(royaltyAmount);
            sendTo.transfer(order.price-royaltyAmount);
        }else{
            sendTo.transfer(order.price);
        }
        order.status = SaleStatus.SOLD;
        _transfer(address(this), msg.sender, tokenId);
        _idToItemStatus[tokenId] = TokenStatus.ACTIVE;
        _itemsSold.increment();
        emit Sold(
            tokenId,
            order.price,
            block.timestamp,
            address(this),
            msg.sender
        );
    }

    // If item is onsell, and still someone want to bid
    function makeOffer(uint tokenId, uint price) external payable nonReentrant {
        SaleOrder storage order = _idToSaleOrder[tokenId];
        require(msg.sender != order.owner, "Owner Can't bid");
        require(order.status == SaleStatus.ACTIVE, "NFT NOT FOR SALE");
        require(msg.value >= price, "Send sufficient Ethers");
        order.bidAmount += 1;
        _idToIndexwiseAddress[tokenId][order.bidAmount] = msg.sender;
        _idToAddressToBidedOnOrder[tokenId][msg.sender] = BidedOnSaleOrder(
            payable(msg.sender),
            price
        );
        emit BideOnSellIsMade(tokenId, price, msg.sender, block.timestamp);
    }

    //Edit Bid
    function editOffer(uint tokenId, uint _newPrice) external payable nonReentrant {
        BidedOnSaleOrder storage bid = _idToAddressToBidedOnOrder[tokenId][msg.sender];
        require(msg.sender == bid.bidder, "Only bidder can Edit his bid");
        if(_newPrice > bid.bidPrice){
            require(msg.value > (_newPrice - bid.bidPrice));
        }else{
            payable(msg.sender).transfer(bid.bidPrice - _newPrice);
        }
        bid.bidPrice = _newPrice;
        emit BidEdited(tokenId, _newPrice, block.timestamp, msg.sender);
    }

    // If NFT owner accept bid made on sale
    function acceptOffer(uint tokenId, address bidder) external payable nonReentrant{
        BidedOnSaleOrder storage order = _idToAddressToBidedOnOrder[tokenId][bidder];
        require(msg.sender == _idToSaleOrder[tokenId].owner || msg.sender == _idToSaleOrder[tokenId].seller, "No permission");
        require(_idToSaleOrder[tokenId].bidAmount > 0, "This address has not bids");

        if(_idToRoyalityStatus[tokenId]){
            (address artist, uint royaltyAmount) = royaltyInfo(tokenId, order.bidPrice);
            payable(artist).transfer(royaltyAmount);
            (_idToSaleOrder[tokenId].owner).transfer(order.bidPrice-royaltyAmount);
        }else{
            (_idToSaleOrder[tokenId].owner).transfer(order.bidPrice);
        }

        _transfer(address(this), order.bidder, tokenId);
        order.bidPrice = 0;
        
        for(uint i=1; i<=_idToSaleOrder[tokenId].bidAmount; i++){
            address _addr = _idToIndexwiseAddress[tokenId][i];
            uint amount = _idToAddressToBidedOnOrder[tokenId][_addr].bidPrice;
            if(amount == 0){
                continue;
            }
            payable(_addr).transfer(amount);
        }
        _idToItemStatus[tokenId] = TokenStatus.ACTIVE;
        _idToSaleOrder[tokenId].status = SaleStatus.SOLD;
        _itemsSold.increment();
        emit Sold(
            tokenId,
            order.bidPrice,
            block.timestamp,
            address(this),
            msg.sender
        );
    }

    function cancel(uint256 tokenId) public nonReentrant {
        SaleOrder storage order = _idToSaleOrder[tokenId];
        require(
            msg.sender == order.owner || msg.sender == order.seller,
            "You dont have permission to cancel"
        );
        require(
            _idToSaleOrder[tokenId].status == SaleStatus.ACTIVE,
            "Marketplace: The token isn't on sale"
        );
        if(order.bidAmount > 0){
            for(uint i=1; i<=order.bidAmount; i++){
                address _addr = _idToIndexwiseAddress[tokenId][i];
                uint amount = _idToAddressToBidedOnOrder[tokenId][_addr].bidPrice;
                payable(_addr).transfer(amount);
            }
        }
        _transfer(address(this), order.owner, tokenId);
        order.status = SaleStatus.CANCELLED;
        _idToItemStatus[tokenId] = TokenStatus.ACTIVE;
        emit EventCanceled(tokenId, msg.sender);
    }

    function getBidsById(uint tokenId) external view returns(BidedOnSaleOrder[] memory){
        SaleOrder storage order = _idToSaleOrder[tokenId];
        address [] memory addresses = new address[](order.bidAmount);
        for(uint i=0; i<order.bidAmount; i++){
            addresses[i] = _idToIndexwiseAddress[tokenId][i+1];
        }
        // return addresses;
        BidedOnSaleOrder [] memory bidArr = new BidedOnSaleOrder[](addresses.length); 
        for(uint i=0; i<addresses.length; i++){
            bidArr[i] = _idToAddressToBidedOnOrder[tokenId][addresses[i]];
        }
        return bidArr;
    }

    function getTokenStatus(uint256 tokenId) external view returns (TokenStatus) {
        return _idToItemStatus[tokenId];
    }
    function getSaleOrder(uint256 tokenId) external view returns (SaleOrder memory) {
        return _idToSaleOrder[tokenId];
    }
}
