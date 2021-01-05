import { ADD_TECH, DEL_TECH, UPD_TECH, MODAL } from '../types/TechTypes';

export const addTech = (tech) => {
    return {
        type: ADD_TECH,
        payload: tech
    }
}

export const delTech = (id) => {
    return {
        type: DEL_TECH,
        payload: id
    }
}

export const updTech = (tech) => {
    return {
        type: UPD_TECH,
        payload: tech
    }
}

export const modal = () => {
    return {
        type: MODAL
    }
}

export const getTech = (tech) => {
    // Completar
}