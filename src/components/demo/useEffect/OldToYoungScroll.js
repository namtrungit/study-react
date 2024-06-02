import React from "react";
import ImgPlayerForScroll from "../../usages/ImgPlayerForScroll";

const OldToYoungScroll = () => {
  return (
    <div style={{margin: 50}}>
      <div>
        <ImgPlayerForScroll name="messi" />
      </div>
      <div>
        <ImgPlayerForScroll name="iniesta" />
      </div>
      <div>
        <ImgPlayerForScroll name="suarez" />
      </div>
      <div>
        <ImgPlayerForScroll name="david-villa" />
      </div>
      <div>
        <ImgPlayerForScroll name="ronaldo" />
      </div>
      <div>
        <ImgPlayerForScroll name="modric" />
      </div>
      <div>
        <ImgPlayerForScroll name="kroos" />
      </div>
      <div>
        <ImgPlayerForScroll name="ramos" />
      </div>
    </div>
  );
};

export default OldToYoungScroll;
