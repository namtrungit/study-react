import React from "react";

const ImgPlayer = (props) => {
  const { name } = props;
  const imgSrc = (time = "old") => `/img/${name}-${time}.jpeg`;
  return <img src={imgSrc()} width={200} height={200}/>;
};

export default ImgPlayer;