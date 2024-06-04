import { all } from "redux-saga/effects";
import { getUsersSaga } from "../features/Users/useCases";

export function* rootSaga() {
  // yield all([helloSaga(), increaseSaga()]);
  yield all([getUsersSaga()]);
}
