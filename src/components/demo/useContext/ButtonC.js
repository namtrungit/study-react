import React, { useContext } from "react";
import { Button } from "antd";
import { ThemeContext } from "../../../App";
const ButtonC = (props) => {
  const { text } = props;
  const theme = useContext(ThemeContext);
  return (
    <>
      <Button style={{ backgroundColor: theme }}>{text}</Button>
    </>
  );
};

export default ButtonC;
