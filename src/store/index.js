import { createStore } from "redux";
import modals from "./reducers";

const store = createStore(modals);
export default store;
