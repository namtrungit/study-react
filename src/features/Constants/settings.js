import { Bounce } from "react-toastify";

export const API_PORT = "http://localhost:2000";
export const API_URL = {
  USERS: {
    INDEX: "/users",
  },
};
export const TOAST_OPTIONS = (time) => {
  const seconds = time * 1000;
  return {
    position: "top-right",
    autoClose: seconds,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };
};
