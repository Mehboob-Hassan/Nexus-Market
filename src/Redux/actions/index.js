import axios from "axios";
import Swal from "sweetalert2";
import BASE_URL from "../../config";

//---------------Login profile / Create Profile Action start here-----------------

export const loginAction = (formData) => async (dispatch) => {
  axios({
    method: "post",
    url: `${BASE_URL}api/auth/profile/create`,
    data: formData,
  }).then((response) => {
    console.log("resLoginData", response.data.data.token);

    const retrnObj = { type: "loginByAddress", payload: response.data };
    console.log("ObjectReturn", retrnObj);
    dispatch(retrnObj);
    localStorage.setItem("authToken", response.data.data.token);
  });
};

// ---------Login profile / Create Profile  action ends here----------------

// ---------------profileUpdateAction Starts from here-----------------

export const profileUpdateAction = (formData) => async (dispatch) => {
  const accessToken = localStorage?.getItem("authToken");
  console.log("checkUpdateToken", accessToken);
  fetch(`${BASE_URL}api/auth/profile/update`, {
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((Data) => {
      console.log("UpdateProfileResAction", Data);
      const retrnObj = { type: "UpdateProfile", payload: Data };
      console.log("ObjectReturn", retrnObj);
      dispatch(retrnObj);
    });
};

// ---------------profileUpdateAction Ends here-----------------

// -------------Save Wallet Address Action starts here ---------------

export const saveWalletAddressAction = (wallet) => async (dispatch) => {
  let newAddress = wallet.toLowerCase();
  const retrnObj = { type: "SaveWallet", payload: newAddress };
  console.log("ObjectReturnWalletAddress", retrnObj);
  dispatch(retrnObj);
};

// -------------Save Wallet Address Action ends here ---------------

// ---------SaveChainID action starts from here -----------------

export const saveChainIdAction = (chainId) => async (dispatch) => {
  const retrnObj = { type: "ChainID", payload: chainId };
  console.log("ObjectReturnChainID", retrnObj);
  dispatch(retrnObj);
};

// ---------SaveChainID action ends here ------------------------

// -------------- createNFT Action starts here --------------

export const createNftAction = (formDataNFT) => async (dispatch) => {
  const accessToken = localStorage?.getItem("authToken");

  fetch(`${BASE_URL}api/nft/create`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(formDataNFT),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log("CeateNFTResAction", response);
      if (response.status === true) {
        Swal.fire("Success", response?.message, "success", {
          buttons: false,
          timer: 2000,
        });
      }
      const retrnObj = { type: "CreateNFT", payload: response };
      console.log("ObjectReturn", retrnObj);
      dispatch(retrnObj);
    })
    .catch((err) => {
      console.log("CeateNFTResActionErr", err);
    });
};

// --------------- createNFT Action ends here -------------

// CreateCollection action start from here

export const createCollectionAction = (formData) => async (dispatch) => {
  const accessToken = localStorage?.getItem("authToken");
  console.log("CheckingFormData", formData);
  fetch(`${BASE_URL}api/collection/create`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.status === 200) {
        Swal.fire("Success", "Sucessfully created", "success", {
          buttons: false,
          timer: 2000,
        });
      }
      console.log("CreateCollectionResponseAction", response);
      const retrnObj = { type: "CreateCollection", payload: response };
      console.log("ObjectReturn", retrnObj);
      dispatch(retrnObj);
    })
    .catch((err) => {
      console.log("ThisIsError", err);
    });
};

// CreatCollection action ends here

// UserData action starts here

export const dashUserDataAction = () => async (dispatch) => {
  const accessToken = localStorage?.getItem("authToken");
  fetch(`${BASE_URL}api/auth/dash`, {
    method: "GET",
    // url: `${BASE_URL}api/auth/dash`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((response) => response.json())
    .then((Data) => {
      console.log("DashActionREs", Data);

      const retrnObj = { type: "DashUserData", payload: Data.data };
      console.log("ObjectReturnDashProfile", retrnObj);
      dispatch(retrnObj);
    });
};

// Userdata action ends here

// ------------ GetAllCollections Action starts from here ------------

export const AllCollectionAction = (pageCount) => async (dispatch) => {
  console.log("PageFromAction", pageCount);
  axios({
    method: "post",
    url: `${BASE_URL}api/collection/getAllCollections`,
    data: {
      size: 6,
      page: pageCount,
    },
  }).then((response) => {
    console.log("AllCollectionResponse", response);
    const retrnObj = { type: "AllCollection", payload: response.data };
    dispatch(retrnObj);
  });
};

// ------------ GetAllCollections Action ends here ------------

// ----------- GetSingleCollectionById Action start from here --------

export const getSingleCollectionAction = (id) => async (dispatch) => {
  axios({
    method: "post",
    url: `${BASE_URL}api/collection/single`,
    data: {
      id: id,
    },
  }).then((response) => {
    console.log("SingleCollectionRes", response);
    const retrnObj = { type: "SingleCollection", payload: response.data };
    dispatch(retrnObj);
  });
};

// ----------- GetSingleCollectionById Action ends here --------

// ------------ GetCollectionByWalletAdress Action starts from here  --------------

export const getCollectionByAddressAction =
  (pageCount, walletAddressGet, size) => async (dispatch) => {
    axios({
      method: "post",
      url: `${BASE_URL}api/collection/CollectionByAddress`,
      data: {
        address: walletAddressGet,
        page: pageCount,
        size: size,
      },
    }).then((response) => {
      console.log("CollectionByAddress", response);
      const retrnObj = { type: "CollectionByAddress", payload: response.data };
      dispatch(retrnObj);
    });
  };

// ------------ GetCollectionByWalletAdress Action ends here  ---------------------

// ------------- DeleteMyCollection Action start from here -------------------------

export const deleteCollectionAction = (id) => async (dispatch) => {
  const accessToken = localStorage?.getItem("authToken");
  axios({
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    url: `${BASE_URL}api/collection/delete`,
    data: {
      id: id,
    },
  })
    .then((response) => {
      console.log("DeleteCollection", response);

      const retrnObj = { type: "DeleteCollection", payload: response.data };
      dispatch(retrnObj);
      if (response?.data?.status === true) {
        Swal.fire("Success", response?.data?.message, "success", {
          buttons: false,
          timer: 2000,
        });
      }
    })
    .catch((error) => {
      Swal.fire("Failed", error?.message, "error", {
        buttons: false,
        timer: 2000,
      });
    });
};

// ------------- DeleteMyCollection Action ends here -------------------------

// -------------- GetAllCategories Action starts from here -------------------
export const getAllCategoriesAction = () => async (dispatch) => {
  // fetch(`${BASE_URL}api/category/getAllCategories`, { method: "GET" })
  // .then((response) => response.json())
  axios({
    method: "GET",
    url: `${BASE_URL}api/category/getAllCategories`,
  }).then((Data) => {
    console.log("GetAllCategoriesREs", Data);
    const retrnObj = { type: "GetAllCategories", payload: Data.data };
    console.log("GetAllCategoriesObj", retrnObj);
    dispatch(retrnObj);
  });
};

// -------------- GetAllCategories Action ends here -------------------

// ----------- UpdateCollectionAction starts from here ----------------
export const updateCollectionAction = (formData) => async (dispatch) => {
  const accessToken = localStorage?.getItem("authToken");
  axios({
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    url: `${BASE_URL}api/collection/update`,
    data: formData,
  })
    .then((response) => {
      console.log("UpdateCollection", response);
      const retrnObj = { type: "UpdateCollection", payload: response.data };
      dispatch(retrnObj);
      if (response?.data?.success === true) {
        Swal.fire("Success", response?.data?.msg, "success", {
          buttons: false,
          timer: 2000,
        });
      }
    })
    .catch((error) => {
      Swal.fire("Failed", error?.msg, "error", {
        buttons: false,
        timer: 2000,
      });
    });
};

// ----------- UpdateCollectionAction ends here -----------------------

//------------- GetNFTbyCollectionID Action starts from here -----------

export const getNFTbyCollectionIdAction =
  (id, pageCount, chainIdGet) => async (dispatch) => {
    const accessToken = localStorage?.getItem("authToken");
    axios({
      method: "post",
      url: `${BASE_URL}api/collection/getNftsByCollectionID`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      data: {
        id: id,
        size: 6,
        page: pageCount,
        chainId: chainIdGet,
      },
    }).then((response) => {
      console.log("NFTbyCollectionID", response);
      const retrnObj = { type: "NFTbyCollectionID", payload: response.data };
      dispatch(retrnObj);
    });
  };

//------------- GetNFTbyCollectionID Action ends here ------------------

// ------------ GetSingleNFT action starts from here -----------------

export const getSingleNFTAction =
  (tokenId, tokenAddress) => async (dispatch) => {
    const accessToken = localStorage?.getItem("authToken");
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      url: `${BASE_URL}api/nft/single`,
      data: {
        tokenId: tokenId,
        tokenAddress: tokenAddress,
      },
    })
      .then((response) => {
        console.log("GetSingleNFTRes", response);
        const retrnObj = { type: "GetSingleNFT", payload: response.data };
        dispatch(retrnObj);
      })
      .catch((error) => {
        console.log(error);
      });
  };

// ------------ GetSingleNFT action ends here -----------------

// ---------------PHP API Action ----------------------
export const phpAPiGET = () => async (dispatch) => {
  axios({
    method: "GET",
    url: "https://laravel-taskly.gbsprojects.xyz/api/admin_all_project",
  })
    .then((response) => {
      console.log("GetProjectsRes", response);
      const retrnObj = { type: "GetProjects", payload: response.data };
      dispatch(retrnObj);
    })
    .catch((error) => {
      console.log("PHP_API_Error", error);
    });
};

// ---------------PHP API Action ----------------------

// ------------- Put NFT On Sale Action starts from here -----------

export const putNftOnSaleAction = (id, price) => async (dispatch) => {
  const accessToken = localStorage?.getItem("authToken");
  axios({
    method: "post",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    url: `${BASE_URL}api/nft/update`,
    data: {
      id: id,
      price: price,
    },
  })
    .then((response) => {
      console.log("PutNFTonSaleRes", response);
      const retrnObj = { type: "PutNFTonSale", payload: response.data };
      dispatch(retrnObj);
    })
    .catch((error) => {
      console.log("PutNFTonSaleError", error);
    });
};

// ------------- Put NFT On Sale Action ends here -----------

// ------------- Transfer NFT Action starts from here -----------
export const TransferNftAction =
  (tokenID, newPriceTransfer, tokenAddress) => async (dispatch) => {
    const accessToken = localStorage?.getItem("authToken");
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      url: `${BASE_URL}api/nft/transfer_Nft`,
      data: {
        newOwner: newPriceTransfer,
        tokenID: tokenID,
        tokenAddress: tokenAddress,
      },
    })
      .then((response) => {
        console.log("TransferNFTRes", response);
        const retrnObj = { type: "TransferNFT", payload: response.data };
        dispatch(retrnObj);
      })
      .catch((error) => {
        console.log("TransferNFTError", error);
      });
  };

// ------------- Transfer NFT Action ends here -----------

// -------------- NFTsonSell Action starts from here ------------

export const NFtOnSellAction =
  (ChainId, pageCount, onSell) => async (dispatch) => {
    axios({
      method: "post",
      url: `${BASE_URL}api/nft/onSell`,
      data: {
        chainID: ChainId,
        size: 6,
        page: pageCount,
        isOnSell: onSell,
      },
    })
      .then((response) => {
        console.log("NFtOnSellRes", response);
        const retrnObj = { type: "NFtOnSell", payload: response.data };
        dispatch(retrnObj);
      })
      .catch((error) => {
        console.log("NFtOnSellResError", error);
      });
  };

// -------------- NFTsonSell Action ends here -----------------

// ------------ myNFTs that are onSell action starts from here--------------

export const myNftOnSellAction =
  (chainId, tokenAddress, onSell) => async (dispatch) => {
    const accessToken = localStorage?.getItem("authToken");
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      url: `${BASE_URL}api/nft/myNfts`,
      data: {
        chainId: chainId,
        tokenAddress: tokenAddress,
        isOnSell: onSell,
      },
    })
      .then((response) => {
        console.log("myNftOnSellRes", response);
        const retrnObj = { type: "myNftOnSell", payload: response.data };
        dispatch(retrnObj);
      })
      .catch((error) => {
        console.log("myNftOnSellError", error);
      });
  };

// ------------ myNFTs that are onSell action ends here--------------

// ------------ CancelListing action starts from here--------------

export const cancelListingAction =
  (tokenId, tokenAddress) => async (dispatch) => {
    const accessToken = localStorage?.getItem("authToken");
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      url: `${BASE_URL}api/nft/cancelListing`,
      data: {
        tokenId: tokenId,
        tokenAddress: tokenAddress,
      },
    })
      .then((response) => {
        console.log("CancelListingRes", response);
        const retrnObj = { type: "CancelListing", payload: response.data };
        dispatch(retrnObj);
      })
      .catch((error) => {
        console.log("CancelListingError", error);
      });
  };
// ------------ CancelListing action ends here--------------

// ------------Finest NFT Action starts from here -----------

export const finestNftAction = () => async (dispatch) => {
  axios({
    method: "post",
    url: `${BASE_URL}api/nft/mostFinestNfts`,
  })
    .then((response) => {
      console.log("FinestNFTRes", response);
      const retrnObj = { type: "FinestNFT", payload: response.data };
      dispatch(retrnObj);
    })
    .catch((error) => {
      console.log("FinestNFTResError", error);
    });
};

// ------------Finest NFT Action ends here ---------------
