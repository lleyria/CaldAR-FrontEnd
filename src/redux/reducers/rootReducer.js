import boilersReducer from "./boilersReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  boilers: boilersReducer,
});

export default rootReducer;
