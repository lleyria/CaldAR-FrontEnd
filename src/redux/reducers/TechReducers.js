import techData from '../../data/Technicians.json';
import { ADD_TECH, DEL_TECH, UPD_TECH, MODAL } from '../types/TechTypes';

const initialState = {
    techData,
    isOpen: false,
    techFind: {},
    isEditing: false
}

const techReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TECH:
            return {
                ...state,
                techData: [...state.techData, action.payload]
            };
        case DEL_TECH:
            return {
                ...state,
                techData: [...state.filter((technician) => technician.id !== action.payload)]
            };
        case UPD_TECH:
            return {
                ...state,
                techFind: {},
                isEditing: false,
                techData: [...state.map((technician) => {
                if (technician.id === action.payload.id) {
                    technician = action.payload;
                }
                return technician;
            }), ]};
        case MODAL:
            return {
                ...state,
                isOpen: !state.isOpen
            }
        // case getTech, payload -> techFind, isEditing: true.
        default: {
            return state;
        }
    }
}

export default techReducers;