import { Button, Input } from "antd";
import React, { useState } from "react";

const SamepleForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = () => {
    alert(`${name} & ${age}`);
  };
  return (
    <>
      <Input onChange={(e) => setName(e.target.value)} />
      <Input onChange={(e) => setAge(e.target.value)} />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
};

export default SamepleForm;
