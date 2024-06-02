import { Button, Checkbox, Input, Radio } from "antd";
import React, { useState, useReducer, useRef } from "react";
import usersReducer from "./UserReducer";

const initialUsers = [
  { id: 1, name: "Trung", finish: true },
  { id: 2, name: "Dat", finish: true },
  { id: 3, name: "Hien", finish: "male" },
];

let nextID = 4;

const UserList = () => {
  const inputRef = useRef(null);
  const [users, usersDispatch] = useReducer(usersReducer, initialUsers);
  const handleAdd = () => {
    usersDispatch({
      type: "add",
      newUser: { id: nextID++, name: inputRef.current.input.value },
    });
  };
  const handleEdit = (userID, check) => {
    usersDispatch({
      type: "check",
      id: userID,
      check,
    });
  };
  const handleDelete = (userID) => {
    usersDispatch({
      type: "delete",
      id: userID,
    });
  };
  return (
    <div>
      <Input onChange={(e) => {}} style={{ width: 200 }} ref={inputRef} />
      <Button onClick={handleAdd}>Add User</Button>
      <ul>
        {users.map((user) => (
          <div key={user.id}>
            <Checkbox
              checked={user.finish}
              onChange={(e) => handleEdit(user.id, e.target.checked)}
            />
            <span>{user.name}</span>
            <Button onClick={() => handleDelete(user.id)}>Delete</Button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
