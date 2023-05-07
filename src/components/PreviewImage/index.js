import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import audioPoster from "./DJ.jpg";

const PreviewImage = ({ file, alt, ...props }) => {
  const [imageUrl, setImageUrl] = useState("");

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setImageUrl(reader.result);
  };
  console.log("checkFileURL", file);
  return (
    <>
      {file?.type?.includes("video") ? (
        <video
          width="100%"
          height="100%"
          src={imageUrl && imageUrl}
          loop={"loop"}
          autoplay={"autoplay"}
          style={{ objectFit: "cover" }}
        />
      ) : file?.type?.includes("audio") ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(${audioPoster})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <audio
            id="audio"
            src={imageUrl && imageUrl}
            controls
            style={{
              position: "absolute",
              bottom: 15,
              width: "100%",
              opacity: "0.5",
            }}
          />
        </Box>
      ) : (
        <img
          src={imageUrl && imageUrl}
          alt={alt ? alt : "can't load image"}
          {...props}
        />
      )}
    </>
  );
};

export default PreviewImage;
