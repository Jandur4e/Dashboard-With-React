import counter from "./reducers/counterReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter,
});
export default allReducers;