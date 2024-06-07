import { Button, Input } from "antd";
import React, { useRef } from "react";
import useArray from "./useArray";

const ArrayDemo = () => {
  const inputRef = useRef(null);
  const [array, push, remove, filter, clear] = useArray([1, 2, 3]);
  return (
    <>
      <div>{array.join(', ')}</div>
      <div>
        <Input style={{ width: 200 }} ref={inputRef} type="number" />
        <Button
          onClick={() => {
            push(inputRef.current.input.value);
          }}
        >
          Add Number
        </Button>
        <Button
          onClick={() => {
            remove(inputRef.current.value);
          }}
        >
          Remove Last Number
        </Button>
        <Button
          onClick={() => {
            filter(7);
          }}
        >
          Filter Number 7
        </Button>
        <Button
          onClick={() => {
            clear();
          }}
        >
          Clear
        </Button>
      </div>
    </>
  );
};

export default ArrayDemo;
