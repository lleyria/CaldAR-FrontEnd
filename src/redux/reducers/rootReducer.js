import { combineReducers } from "redux";
import buildingReducer from './buildingReducers'

const rootReducer = combineReducers({
    buildings: buildingReducer,
});

export default rootReducer;
