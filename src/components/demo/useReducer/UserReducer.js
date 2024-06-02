const usersReducer = (users, action) => {
  switch (action.type) {
    case "add": {
      const { newUser } = action;
      return [...users, newUser];
    }
    case "check": {
      const { id, check } = action;
      return users.map((user) => {
        if (user.id === id) {
          user.finish = check;
          return user;
        }
        return user;
      });
    }
    case "delete":
      const { id } = action;
      return users.filter((user) => user.id !== id);
    default:
      return users;
  }
};

export default usersReducer;
