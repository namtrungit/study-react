import React, { useContext } from "react";
import { Input } from "antd";
import { ThemeContext } from "../../../App";
import ButtonC from "./ButtonC";
const FomrC = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme }} type="primary">
      Welcome
      <ButtonC text="ButtonC" />
    </div>
  );
};

export default FomrC;
