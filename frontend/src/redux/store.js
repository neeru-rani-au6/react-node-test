import { createStore, applyMiddleware } from "redux";
import userReducer from "./reducer/user";
import thunk from "redux-thunk";

const store = createStore(userReducer, applyMiddleware(thunk));
export default store;
