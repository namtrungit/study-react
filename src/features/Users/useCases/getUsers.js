import { put, takeLatest } from "redux-saga/effects";
import { API_PORT, API_URL, TOAST_OPTIONS } from "../../Constants/settings";
import { getSucess, getError, get } from "../usersSlice";
import { toast } from "react-toastify";

function* getUsers(data) {
  const requestUrl = API_PORT + API_URL.USERS.INDEX;
  const headers = {
    method: "GET",
  };
  try {
    const response = yield fetch(requestUrl, headers).then((res) => res.json());
    if (response.status === 200) {
      yield put(getSucess(response.data));
    } else {
      yield toast.error(response.statusText, TOAST_OPTIONS(3));
      yield put(getError(response));
    }
  } catch (err) {
    yield toast.error(err.message, TOAST_OPTIONS(3));
    yield put(getError(err));
  }
}

export default function* getUsersSaga() {
  yield takeLatest(get().type, getUsers);
}
