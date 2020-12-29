import companiesMockData from "../../data/companiesMockData.json"
import { ADD_COMPANY, DEL_COMPANY, UPDATE_COMPANY } from "../types/companyTypes";

const companyReducer = (state = companiesMockData , action) => {
    switch (action.type) {
        case ADD_COMPANY:
            return [...state, action.payload];
        case DEL_COMPANY:
            return state;
        case UPDATE_COMPANY:
            return state;    
    }
}

export default companyReducer