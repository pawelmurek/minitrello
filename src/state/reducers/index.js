import { combineReducers } from "redux";
import cards from "./cards";
import lists from "./lists";
import boards from "./boards";

const rootReducer = combineReducers({
    cards,
    lists,
    boards
});

export default rootReducer;
