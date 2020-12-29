import BuildingDB from "../../data/mock_buildings.json"
import { ADD_BUILDING, DEL_BUILDING, UPDATE_BUILDING } from "../types/buildingTypes";

const buildingReducer = (state = BuildingDB , action) => {
    switch (action.type) {
        case ADD_BUILDING:
            return [...state, action.payload];
        case DEL_BUILDING:
            return [...state.filter((building) => building.id !== action.payload)];
        case UPDATE_BUILDING:
            return [
                ...state.map((building) => {
                  if (building.id === action.payload.id) {
                    building = action.payload;
                  }
                  return building;
                }),
              ];
        default: {
            return state;
        }    
    } 
}
export default buildingReducer