import { combineReducers } from "redux";
import buidlingReducer from './buildingReducers'

const rootReducer = combineReducers({
    buildings: buidlingReducer,
});

export default rootReducer;
