import React from "react";
import ImgPlayer from "../../usages/ImgPlayer";

const OldToYoung = () => {
  return (
    <>
      <div>
        <ImgPlayer name="messi" />
        <ImgPlayer name="iniesta" />
        <ImgPlayer name="suarez" />
        <ImgPlayer name="david-villa" />
      </div>
      <hr />
      <div>
        <ImgPlayer name="ronaldo" />
        <ImgPlayer name="modric" />
        <ImgPlayer name="kroos" />
        <ImgPlayer name="ramos" />
      </div>
    </>
  );
};

export default OldToYoung;
