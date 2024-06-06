import { Input, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const BaseInput = (props) => {
  const { label, ...rest } = props;
  return (
    <>
      <Text>{label}</Text>
      <Input {...rest} />
    </>
  );
};

export default BaseInput;
