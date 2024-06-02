import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import counterReducer from "../features/counter/counterSlice";
import { rootSaga } from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
