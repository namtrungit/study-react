import { Button } from "antd";
import React, { useState } from "react";

const DemoUseEffect = () => {
  const [number, setNumber] = useState(0);

  return (
    <>
      <span>You clicked {number} times</span>
      <Button onClick={() => setNumber(number + 1)}>Number+</Button>
    </>
  );
};

export default DemoUseEffect;
