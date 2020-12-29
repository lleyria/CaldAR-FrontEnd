import { combineReducers } from "redux";
import listTech from './listTech';

const rootReducer = combineReducers({
    list: listTech
});

export default rootReducer;
