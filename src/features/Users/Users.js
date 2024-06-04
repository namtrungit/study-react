import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, get, remove, update } from "./usersSlice";

const Users = () => {
  const { userList = [], get: getUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get());
  }, [dispatch]);
  return (
    <div>
      USER
      {userList.map((user) => (
        <div key={user.id}>
          <span>{user.name}</span>
          <span>{user.age}</span>
          <span>
            <Button onClick={() => dispatch(update(user))}>Remove</Button>
          </span>
        </div>
      ))}
      <Button loading={getUser.loading} onClick={() => dispatch(create())}>
        Create
      </Button>
    </div>
  );
};

export default Users;
