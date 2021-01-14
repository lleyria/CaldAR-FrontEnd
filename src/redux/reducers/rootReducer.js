import { combineReducers } from "redux";
import buildingReducer from './buildingReducers'
import techReducer from './TechReducers';
import companiesReducer from './companiesReducer'

const rootReducer = combineReducers({
    buildings: buildingReducer,
    techReducer,
    companiesReducer,
});

export default rootReducer;
