import BuildingDB from "../../data/mock_buildings.json"
import { ADD_BUILDING, DEL_BUILDING, UPDATE_BUILDING } from "../types/buildingTypes";

const buidlingReducer = (state = BuildingDB , action) => {
    switch (action.type) {
        case ADD_BUILDING:
            return [...state, action.payload];
        case DEL_BUILDING:
            return state;
        case UPDATE_BUILDING:
            return state;    
    }
}

export default buidlingReducer