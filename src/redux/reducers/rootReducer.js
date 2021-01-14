import { combineReducers } from "redux";
import buildingReducer from './buildingReducers'
import techReducer from './TechReducers';

const rootReducer = combineReducers({
    buildings: buildingReducer,
    techReducer,
});

export default rootReducer;
