import axios from "axios";
var pinataJWT = process.env.REACT_APP_PINATATOKEN;
const JWT = `Bearer ${pinataJWT}`;
var baseURL = process.env.REACT_APP_PINATABASEURL;
// const tokenURIBaseURL = process.env.REACT_APP_PINATATOKENURI;

var apiKey = process.env.REACT_APP_PINATAAPIKey;
var secretKey = process.env.REACT_APP_PINATASecretKey;

// // // // // // // // // / // // // // //
//
//
//       upload File to Pinata
//
//
// // // // // // // // // / // / // // //
const uploadIMGToPinata = async (file) => {
  try {
    console.log("this is JWT", JWT);
    const formData = new FormData();
    formData.append("file", file);
    var imgURL = "";
    await axios
      .post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          "Content-Type": `multipart/form-data;  boundary=${formData._boundary}`,
          Authorization: JWT,
        },
      })
      .then(function (data) {
        // console.log("this is data", data);
        var ipsData = data.data.IpfsHash;
        imgURL = baseURL + ipsData;
      })
      .catch((err) => {
        console.log("this is erro in PInanta API", err);
      });

    return { success: true, imgURL };
  } catch (error) {
    console.log("error", error);
    return { success: false, imgURL: "" };
  }
};

// // // // // // // // // / // // // // //
//
//
//       upload JSON to Pinata
//
//
// // // // // // // // // / // / // // //
const uploadJSONTOPinata = async (imgURL, name, desc, externalLink) => {
  try {
    var data = {
      image: imgURL,
      name: name,
      desc: desc,
      externalLink: externalLink,
    };
    var tokenURI = "";
    var url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
    await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        pinata_api_key: apiKey,
        pinata_secret_api_key: secretKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        tokenURI = baseURL + data.IpfsHash;
      });
    return { success: true, tokenURI };
  } catch (err) {
    console.log("error", err);
    return { success: false, tokenURI: "" };
  }
};

export { uploadIMGToPinata, uploadJSONTOPinata };
