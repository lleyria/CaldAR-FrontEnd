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

const URL = 'https://app-caldar.herokuapp.com/technicians';

const getTechFetching = () => ({
    type: GET_TECH_FETCHING,
});

const getTechFulfilled = (payload) => ({
    type: GET_TECH_FULFILLED,
    payload,
});

const getTechRejected = () => ({
    type: GET_TECH_REJECTED,
});

export const getTechs = () => (dispatch) => {
    dispatch(getTechFetching());
    return fetch(URL)
    .then((data) => data.json())
    .then((response) => {
        dispatch(getTechFulfilled(response));
    })
    .catch(() => {
        dispatch(getTechRejected());
    });
};

const addTechFetching = () => ({
    type: ADD_TECH_FETCHING,
});

const addTechFulfilled = (payload) => ({
    type: ADD_TECH_FULFILLED,
    payload,
});

const addTechRejected = () => ({
    type: ADD_TECH_REJECTED,
});

export const addTech = (technician) => (dispatch) => {
    dispatch(addTechFetching());
    return fetch(URL, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(technician),
    })
        .then((data) => data.json())
        .then((response) => {
            dispatch(addTechFulfilled(response));
        })
        .catch(() => {
            dispatch(addTechRejected());
        });
};

const delTechFetching = () => ({
    type: DEL_TECH_FETCHING,
});

const delTechFulfilled = (payload) => ({
    type: DEL_TECH_FULFILLED,
    payload,
});

const delTechRejected = () => ({
    type: DEL_TECH_REJECTED,
});

export const delTech = (id) => (dispatch) => {
    dispatch(delTechFetching());
    return fetch(`${URL}/?id=${id}`, {
        method: 'DELETE'
        })
        .then((data) => data.json())
        .then(() => {
            dispatch(delTechFulfilled(id));
        })
        .catch(() => {
            dispatch(delTechRejected());
        });
};

const updTechFetching = () => ({
    type: UPD_TECH_FETCHING,
});

const updTechFulfilled = (payload) => ({
    type: UPD_TECH_FULFILLED,
    payload,
});

const updTechRejected = () => ({
    type: UPD_TECH_REJECTED,
});

export const updTech = (technician) => (dispatch) => {
    dispatch(updTechFetching());
    return fetch(`${URL}/?id=${technician._id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(technician)
        })
        .then((data) => data.json())
        .then(() => {
            dispatch(updTechFulfilled(technician));
        })
        .catch(() => {
            dispatch(updTechRejected());
        });
};

export const showForm = (id) => ({ type: SHOW_FORM, payload: id });