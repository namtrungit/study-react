import { Button, Checkbox, Input } from "antd";
import React, { useEffect, useMemo, useState } from "react";

const FormMemo = () => {
  const [number, setNumber] = useState("");
  const [dark, setDark] = useState([]);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themes = useMemo(() => {
    return {
      backgroundColor: dark ? "pink" : "white",
    };
  }, [dark]);

  useEffect(() => {
    console.log("themes changed");
  }, [themes]);
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
