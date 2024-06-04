import { Button } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get } from "./usersSlice";

const Users = () => {
  const { userList, get: getUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get());
  }, [dispatch]);
  return (
    <div>
      USER
      {userList.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.age}</p>
        </div>
      ))}
      <Button loading={getUser.loading}>Create</Button>
    </div>
  );
};

export default Users;
