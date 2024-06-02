import { all, takeEvery } from "redux-saga/effects";

function* helloSaga() {
  console.log("Hello Sagas!");
}

function* increaseSaga(data) {
  console.log("Increase Sagas!");
  console.log(data);
  yield takeEvery("counter/decrement", (action) => console.log(action));
}

export function* rootSaga() {
  yield all([helloSaga(), increaseSaga()]);
}
