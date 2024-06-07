import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";

const ImgPlayerForScroll = (props) => {
  const imgRef = useRef(null);
  const [inView, setInView] = useState(false);

  const { name } = props;
  const imgSrc = (time = "old") => `/img/${name}-${time}.jpeg`;
  return (
    <div style={{ margin: 10 }}>
      <img
        src={inView ? imgSrc("young") : imgSrc("old")}
        width={500}
        height={500}
        ref={imgRef}
        alt=""
      />
    </div>
  );
};

export default ImgPlayerForScroll;
