import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";

const ImgPlayerForScroll = (props) => {
  const imgRef = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    setLoading(false);
    return () => window.removeEventListener("scroll", scrollHandler);
  });
  const [inView, setInView] = useState(false);
  const [loading, setLoading] = useState(true);
  const isInView = () => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };
  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };
  const { name } = props;
  const imgSrc = (time = "old") => `/img/${name}-${time}.jpeg`;
  return loading ? null : (
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
