import {
    SHOW_FORM,
    GET_TECH_FETCHING,
    GET_TECH_FULFILLED,
    GET_TECH_REJECTED,
    ADD_TECH_FETCHING,
    ADD_TECH_FULFILLED,
    ADD_TECH_REJECTED,
    DEL_TECH_FETCHING,
    DEL_TECH_FULFILLED,
    DEL_TECH_REJECTED,
    UPD_TECH_FETCHING,
    UPD_TECH_FULFILLED,
    UPD_TECH_REJECTED
} from '../types/TechTypes';

const initialState = {
    technicians: [],
    error: false,
    formVisible: false,
    initialFormState: null,
    isLoading: false,
}

const techReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_TECH_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case GET_TECH_FULFILLED:
            return {
                ...state,
                isLoading: false,
                technicians: action.payload,
            };
        case GET_TECH_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        case ADD_TECH_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case ADD_TECH_FULFILLED:
            return {
                ...state,
                formVisible: true,
                isLoading: false,
                technicians: [...state.technicians, action.payload],
            };
        case ADD_TECH_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        case DEL_TECH_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case DEL_TECH_FULFILLED:
            return {
                ...state,
                isLoading: false,
                list: [
                    ...state.list.filter(
                    (technician) => technician._id !== action.payload
                    ),
                ],
            };
        case DEL_TECH_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        case UPD_TECH_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case UPD_TECH_FULFILLED: {
            const techWithUpdElement = state.technicians.map((technician) => {
                if(technician._id === action.payload._id) {
                    technician = action.payload;
                }
                return technician;
            });
            return {
                ...state,
                formVisible: false,
                isLoading: false,
                technicians: techWithUpdElement,
            };
        }
        case UPD_TECH_REJECTED:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        case SHOW_FORM: {
            let result = null;
            if(action.payload) {
                const filteredTech = state.technicians.filter(
                    (technician) => technician._id === action.payload
                );
                result = filteredTech.length !== 0 ? filteredTech[0] : null;
            }
            return { ...state, formVisible: true, initialFormState: result };
        }
        default:
            return state;
    }
};

export default techReducer;