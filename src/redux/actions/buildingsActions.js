import {
    GET_BUILDINGS_FETCHING,
    GET_BUILDINGS_FULLFILLED,
    GET_BUILDINGS_REJECTED,
    ADD_BUILDING_FETCHING,
    ADD_BUILDING_FULLFILLED,
    ADD_BUILDING_REJECTED,
    DELETE_BUILDING_FETCHING,
    DELETE_BUILDING_FULLFILLED,
    DELETE_BUILDING_REJECTED,
    UPDATE_BUILDING_FETCHING,
    UPDATE_BUILDING_FULLFILLED,
    UPDATE_BUILDING_REJECTED
} from '../types/buildingTypes'

const URL = "https://app-caldar.herokuapp.com/buildings"

const getHeaders = () => ({
  "Accept": "application/json",
  "Content-type": "application/json",
  token: localStorage.getItem('token')
})


export const getBuildingsFetching = () => {
    return {
        type: GET_BUILDINGS_FETCHING,
    }
}

export const getBuildingsFullfilled = (items) => {
    return {
        type: GET_BUILDINGS_FULLFILLED,
        payload: items
    }
}

export const getBuildingsRejected = (error) => {
    return {
        type: GET_BUILDINGS_REJECTED,
        payload: error
    }
}

export const getBuildings = () => dispatch => {
    dispatch(getBuildingsFetching());
    return fetch(URL)
      .then((data) => data.json())
      .then((json) => dispatch(getBuildingsFullfilled(json)))
      .catch((error) => dispatch(getBuildingsRejected(error)))
};

const addBuildingFetching = () => ({
    type: ADD_BUILDING_FETCHING,
  });
  
  const addBuildingFullfilled = (build) => ({
    type: ADD_BUILDING_FULLFILLED,
    payload: build,
  });
  
  const addBuildingRejected = (error) => ({
    type: ADD_BUILDING_REJECTED,
    payload: error,
  });
  
  export const addBuilding = (build) => (dispatch) => {
    dispatch(addBuildingFetching());
    const body = JSON.stringify(build);
    console.log('body', body);
    return fetch(`${URL}/`, {
      method: "POST",
      headers: getHeaders(),
      body: body,
    })
      .then((data) => data.json())
      .then((json) => {
          dispatch(addBuildingFullfilled(json));
      })
      .catch((error) => dispatch(addBuildingRejected(error)));
  };
  
  const deleteBuildingFetching = () => ({
    type: DELETE_BUILDING_FETCHING,
  });
  
  const deleteBuildingFullfilled = (id) => ({
    type: DELETE_BUILDING_FULLFILLED,
    payload: id
  });
  
  const deleteBuildingRejected = (error) => ({
    type: DELETE_BUILDING_REJECTED,
    payload: error
  });
  
  export const delBuilding = (_id) => (dispatch) => {
    dispatch(deleteBuildingFetching());
    return (
      fetch(`${URL}/?id=${_id}`, { method: "DELETE" })
        .then((data) => data.json())
        .then(() => {
          dispatch(deleteBuildingFullfilled(_id));
        })
        .catch(() => {
          dispatch(deleteBuildingRejected());
        })
    );
  };
  
  const updateBuildingFetching = () => ({
    type: UPDATE_BUILDING_FETCHING,
  });
  
  const updateBuildingFullfilled = (build) => ({
    type: UPDATE_BUILDING_FULLFILLED,
    payload: build,
  });
  
  const updateBuildingRejected = (error) => ({
    type: UPDATE_BUILDING_REJECTED,
    payload: error,
  });
  
  export const updateBuilding = (build) => (dispatch) => {
    dispatch(updateBuildingFetching());
    return fetch(`${URL}/?id=${build._id}`, {
      method: "PUT",
      body: JSON.stringify(build),
      headers: getHeaders(),
    })
      .then(() => {
          dispatch(updateBuildingFullfilled(build));
      })
      .catch((error) => dispatch(updateBuildingRejected(error)));
  };
  




