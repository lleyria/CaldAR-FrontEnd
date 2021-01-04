import techData from '../../data/Technicians.json';
import { ADD_TECH, DEL_TECH, UPD_TECH } from '../types/TechTypes';

const techReducers = (state = techData, action) => {
    switch (action.type) {
        case ADD_TECH:
            return [...state, action.payload];
        case DEL_TECH:
            return [...state.filter((technician) => technician.id !== action.payload)];
        case UPD_TECH:
            return [...state.map((technician) => {
                if (technician.id === action.payload.id) {
                    technician = action.payload;
                }
                return technician;
            }), ];
        default: {
            return state;
        }
    }
}

export default techReducers;