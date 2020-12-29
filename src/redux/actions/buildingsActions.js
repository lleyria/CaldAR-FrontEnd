import {
    ADD_BUILDING,
    DEL_BUILDING,
    UPDATE_BUILDING
} from '../types/buildingTypes'

export const addBuildingAction = (build) => {
    return {
        type: ADD_BUILDING,
        payload: build
    }
}
export const delBuildingAction = (id) => {
    return {
        type: DEL_BUILDING,
        payload: id
    }
}

export const updateBuildingAction = (build) => {
    return {
        type: UPDATE_BUILDING,
        payload: build
    }
}




