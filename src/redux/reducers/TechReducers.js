import techData from '../../data/Technicians.json';
import { ADD_TECH, DEL_TECH, UPD_TECH, FORM_TECH } from '../types/TechTypes';

const initialState = {
    technicians: techData,
    formVisible: false,
    initialFormState: null
};

const techReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TECH:
            return {
                ...state,
                formVisible: false,
                technicians: [...state.technicians, action.payload],
            };
        case DEL_TECH:
            return {
                technicians: [
                    ...state.technicians.filter((technician) => technician.id !== action.payload),
                ],
            };
        case FORM_TECH: {
            let result = null;
            if (action.payload) {
                const filterTech = state.technicians.filter(
                    (technician) => technician.id === action.payload
                );
                result = filterTech.length !== 0 ? filterTech[0] : null;
            }
            return { ...state, formVisible: true, initialFormState: result };
        };
        case UPD_TECH:
            const techToUpdate = state.technicians.map((element) => {
                if (element.id === action.payload.id) {
                    element.id = action.payload.id;
                    element.firstName = action.payload.firstName;
                    element.lastName = action.payload.lastName;
                    element.email = action.payload.email;
                    element.boilersType = action.payload.boilersType;
                    element.professionalLevel = action.payload.professionalLevel;
                    element.hourRate = action.payload.hourRate;
                    element.monthlyCapacity = action.payload.monthlyCapacity;
                }
                return element;
            });
            return {
                ...state,
                formVisible: false,
                technicians: techToUpdate,
            };
            default:
                return state;
    }
};

export default techReducers;