import { Button } from "antd";
import React from "react";

const BaseButton = (props) => {
  const { text, ...rest } = props;
  return (
    <>
      <Button {...rest}>{text}</Button>
    </>
  );
};

export default BaseButton;
