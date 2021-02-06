import boilersReducer from "./boilersReducer";
import { combineReducers } from "redux";
import buildingReducer from './buildingReducers';
import techReducer from './TechReducers';
import companiesReducer from './companiesReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    buildings: buildingReducer,
    techReducer,
    companiesReducer,
    boilersReducer,
    authReducer
});

export default rootReducer;
