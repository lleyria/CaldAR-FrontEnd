import { combineReducers } from "redux";
import techReducers from './TechReducers';

const rootReducer = combineReducers({
    technicians: techReducers,
});

export default rootReducer;
