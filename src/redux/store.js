import { createStore } from "redux";
import conterreducer from "./reducers/counterreducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

const store = createStore(conterreducer, enhancer);

export default store;
