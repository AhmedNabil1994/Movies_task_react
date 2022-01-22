import { createStore } from "redux";
import { favReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store=createStore (favReducer,composeWithDevTools())

export default store;