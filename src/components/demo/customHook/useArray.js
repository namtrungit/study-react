import { useState } from "react";

const useArray = (initArray) => {
  const [array, setArray] = useState(initArray);
  const push = (number) => {
    setArray([...array, parseInt(number)]);
  };

  const remove = () => {
    setArray(array.slice(0, array.length - 1));
  };

  const filter = (number) => {
    console.log(array);
    setArray(array.filter((num) => num === 7));
  };

  const clear = () => {
    setArray([]);
  };

  return [array, push, remove, filter, clear];
};

export default useArray;
