import {
    ADD_BUILDING,
    DEL_BUILDING,
    UPDATE_BUILDING
} from '../types/buildingTypes'

const addBuilding = (build) => {
    return {
        type: ADD_BUILDING,
        payload: build
    }
}

const delBuilding = () => {
    return {
        type: DEL_BUILDING
    }
}

const updateBuilding = () => {
    return {
        type: UPDATE_BUILDING
    }
}


