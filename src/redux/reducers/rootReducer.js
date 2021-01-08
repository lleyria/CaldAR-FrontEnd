import { combineReducers } from "redux";
import techReducer from './TechReducers';

const rootReducer = combineReducers({
    techReducer,
});

export default rootReducer;
