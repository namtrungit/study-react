import { all } from "redux-saga/effects";
import {
  getUsersSaga,
  removeUserSaga,
  createUserSaga,
  updateUserSaga,
} from "../features/Users/useCases";

export function* rootSaga() {
  // yield all([helloSaga(), increaseSaga()]);
  yield all([
    getUsersSaga(),
    createUserSaga(),
    removeUserSaga(),
    updateUserSaga(),
  ]);
}
