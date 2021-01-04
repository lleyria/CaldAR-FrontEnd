import { combineReducers } from "redux";
import companiesReducer from './companiesReducer'

const rootReducer = combineReducers({
    companiesReducer, 
});

export default rootReducer;
