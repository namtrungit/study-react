import { Checkbox } from "antd";
import React, { memo } from "react";

const ImgPlayerLiked = memo((props) => {
  const { name, liked, likedHandler } = props;
  const imgSrc = (time = "old") => `/img/${name}-${time}.jpeg`;
  console.log(`render ${name} ${liked}`);
  return (
    <>
      <img src={imgSrc()} width={200} height={200} alt="" />
      <Checkbox
        checked={liked}
        onChange={(e) => {
          likedHandler(name, e);
        }}
      />
    </>
  );
});
export default ImgPlayerLiked;
