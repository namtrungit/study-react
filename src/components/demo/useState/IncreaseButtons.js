import React, { useState } from "react";
import { Button } from "antd";

const IncreaseButtons = () => {
  const [number, setNumber] = useState(0);
  return (
    <>
      <Button
        onClick={() => {
          setNumber(number - 1);
        }}
      >
        -
      </Button>
      <Button
        text="+"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </Button>
      <div>{number}</div>
    </>
  );
};

export default IncreaseButtons;
