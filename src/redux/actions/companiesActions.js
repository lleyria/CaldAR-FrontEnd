import {
    ADD_COMPANY,
    DEL_COMPANY,
    SHOW_FORM,
    UPDATE_COMPANY
} from '../types/companyTypes'

export const addCompany = (company) => ({ type: ADD_COMPANY, payload: company });
export const delCompany = (id) => ({ type: DEL_COMPANY, payload: id });
export const showForm = (id) => ({ type: SHOW_FORM, payload: id });
export const updateCompany = (company) => ({ type: UPDATE_COMPANY, payload: company });