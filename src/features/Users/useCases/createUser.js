import { put, takeLatest } from "redux-saga/effects";
import { API_PORT, API_URL, TOAST_OPTIONS } from "../../Constants/settings";
import { create, get } from "../usersSlice";
import { toast } from "react-toastify";

function* createUsers(data) {
  const requestUrl = API_PORT + API_URL.USERS.INDEX;
  const headers = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "TrungBN",
      age: 17,
    }),
  };
  try {
    const response = yield fetch(requestUrl, headers).then((res) => res.json());
    if (response.status === 200) {
      yield put(get());
      yield toast.success(response.message, TOAST_OPTIONS(3));
    } else {
      yield toast.error(response.message, TOAST_OPTIONS(3));
    }
  } catch (err) {
    yield toast.error(err.message, TOAST_OPTIONS(3));
  }
}

export default function* createUserSaga() {
  yield takeLatest(create().type, createUsers);
}
