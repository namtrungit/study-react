import React, { useRef } from "react";

const ImgPlayer = (props) => {
  const imgRef = useRef(null);
  const { name } = props;
  const imgSrc = (time = "old") => `/img/${name}-${time}.jpeg`;
  return <img src={imgSrc()} width={200} height={200} ref={imgRef} alt="" />;
};

export default ImgPlayer;
