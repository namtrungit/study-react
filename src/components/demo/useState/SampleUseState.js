import { Button, Input } from "antd";
import React, { useState } from "react";

const SampleUseState = () => {
  const [valueInput, setValueInput] = useState("");
  const [userList, setUserList] = useState([]);
  return (
    <>
      <Input
        onChange={(e) => {
          setValueInput(e.target.value);
        }}
      />
      <div>{valueInput}</div>
      <Button
        onClick={() => {
          setUserList([...userList, valueInput]);
        }}
      >
        Add User
      </Button>
      <ul>
        {userList.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </>
  );
};

export default SampleUseState;
