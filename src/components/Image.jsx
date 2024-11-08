import React from "react";
import product from "../Product";

const Image = () => {
  return (
    <img
      src={product.image}
      alt={product.name}
      style={{
        maxWidth: "100%",
        height: "200px", // Limit the height of the image
        objectFit: "contain", // Maintain aspect ratio
      }}
    />
  );
};

export default Image;
