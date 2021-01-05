import {
  SHOW_FORM,
  GET_BOILERS_FETCHING,
  GET_BOILERS_FULFILLED,
  GET_BOILERS_REJECTED,
  ADD_BOILERS_FULFILLED,
  ADD_BOILERS_FETCHING,
  ADD_BOILERS_REJECTED,
  DELETE_BOILERS_FULFILLED,
  DELETE_BOILERS_FETCHING,
  DELETE_BOILERS_REJECTED,
  UPDATE_BOILERS_FULFILLED,
  UPDATE_BOILERS_FETCHING,
  UPDATE_BOILERS_REJECTED,
} from "../types/boilersConstants";

const URL = "https://app-caldar.herokuapp.com/boilers";

const getBoilersFetching = () => ({
  type: GET_BOILERS_FETCHING,
});

const getBoilersFulfilled = (payload) => ({
  type: GET_BOILERS_FULFILLED,
  payload,
});

const getBoilersRejected = () => ({
  type: GET_BOILERS_REJECTED,
});

export const getBoilers = () => (dispatch) => {
  dispatch(getBoilersFetching());
  return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getBoilersFulfilled(response));
    })
    .catch(() => {
      dispatch(getBoilersRejected());
    });
};

const addBoilerFetching = () => ({
  type: ADD_BOILERS_FETCHING,
});

const addBoilerFulfilled = (payload) => ({
  type: ADD_BOILERS_FULFILLED,
  payload,
});

const addBoilerRejected = () => ({
  type: ADD_BOILERS_REJECTED,
});

export const addBoiler = (boiler) => (dispatch) => {
  dispatch(addBoilerFetching());
  return fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "aplication/json" },
    body: JSON.stringify(boiler),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(addBoilerFulfilled(response));
    })
    .catch(() => {
      dispatch(addBoilerRejected());
    });
};

const deleteBoilerFetching = () => ({
  type: DELETE_BOILERS_FETCHING,
});

const deleteBoilerFulfilled = (payload) => ({
  type: DELETE_BOILERS_FULFILLED,
  payload,
});

const deleteBoilerRejected = () => ({
  type: DELETE_BOILERS_REJECTED,
});

export const deleteBoiler = (id) => (dispatch) => {
  dispatch(deleteBoilerFetching());
  return fetch(`${URL}/?id=${id}`, { method: "DELETE" })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteBoilerFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteBoilerRejected());
    });
};

const updateBoilerFetching = () => ({
  type: UPDATE_BOILERS_FETCHING,
});

const updateBoilerFulfilled = (payload) => ({
  type: UPDATE_BOILERS_FULFILLED,
  payload,
});

const updateBoilerRejected = () => ({
  type: UPDATE_BOILERS_REJECTED,
});

export const updateBoiler = (payload) => (dispatch) => {
  dispatch(updateBoilerFetching());
  return fetch(`${URL}/?id=${payload.id}`, { method: "PUT" })
    .then((data) => data.json())
    .then(() => {
      dispatch(updateBoilerFulfilled(payload.id));
    })
    .catch(() => {
      dispatch(updateBoilerRejected());
    });
};

export const showForm = (id) => ({ type: SHOW_FORM, payload: id });
// export const updateBoiler = (boiler) => ({
//   type: UPDATE_BOILER,
//   payload: boiler,
// });
