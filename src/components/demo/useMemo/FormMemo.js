import { Checkbox, Input } from "antd";
import React, { useState } from "react";

const FormMemo = () => {
  const [number, setNumber] = useState("");
  const [dark, setDark] = useState({});
  const doubleNumber = slowFunction(number);

  const themes = {
    backgroundColor: dark ? "pink" : "white",
  };

  return (
    <div style={{ margin: 0, backgroundColor: themes.backgroundColor }}>
      <div>
        <Input
          type="number"
          style={{ width: 500 }}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </div>
      <Checkbox onChange={(e) => setDark(e.target.checked)} />
      <div>DoubleNumber:{doubleNumber}</div>
    </div>
  );
};

const slowFunction = (number) => {
  for (let i = 0; i <= 1000000000; i++) {} // This shit makes function low
  return number * 2;
};

export default FormMemo;
