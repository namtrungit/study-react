import { Checkbox, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const BaseCheckbox = (props) => {
  const { label, ...rest } = props;
  return (
    <>
      <Text className="label-checkbox">{label}</Text>
      <Checkbox {...rest} />
    </>
  );
};

export default BaseCheckbox;
