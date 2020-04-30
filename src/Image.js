import React from "react";
import "./App.css";

const Image = ({ tags, image }) => {
  return (
    <div>
      <img src={image} />
    </div>
  );
};

export default Image;
