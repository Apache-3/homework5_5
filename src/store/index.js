import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { PhoneReducer } from "./PhoneReducer";

export const store = createStore(PhoneReducer, applyMiddleware(thunk))