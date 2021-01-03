import { ADD_TECH, DEL_TECH, UPD_TECH, FORM_TECH } from '../types/TechTypes';

export const addTech = (technician) => ({ type: ADD_TECH, payload: technician });
export const delTech = (id) => ({ type: DEL_TECH, payload: id });
export const updTech = (technician) => ({ type: UPD_TECH, payload: technician });
export const formTech = (id) => ({ type: FORM_TECH, payload: id });