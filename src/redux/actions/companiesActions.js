import {
    ADD_COMPANY,
    DEL_COMPANY,
    UPDATE_COMPANY
} from '../types/companyTypes'

const addCompany = (build) => {
    return {
        type: ADD_COMPANY,
        payload: build
    }
}

const delCompany = () => {
    return {
        type: DEL_COMPANY
    }
}

const updateCompany = () => {
    return {
        type: UPDATE_COMPANY
    }
}