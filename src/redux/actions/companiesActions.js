import {
    SHOW_FORM,
    GET_COMPANIES_FETCHING,
    GET_COMPANIES_FULFILLED,
    GET_COMPANIES_REJECTED,
    ADD_COMPANIES_FULFILLED,
    ADD_COMPANIES_FETCHING,
    ADD_COMPANIES_REJECTED,
    DELETE_COMPANIES_FULFILLED,
    DELETE_COMPANIES_FETCHING,
    DELETE_COMPANIES_REJECTED,
    UPDATE_COMPANIES_FULFILLED,
    UPDATE_COMPANIES_FETCHING,
    UPDATE_COMPANIES_REJECTED,
} from '../types/companyTypes'

const URL = "https://app-caldar.herokuapp.com/companies";

const getCompaniesFetching = () => ({
    type: GET_COMPANIES_FETCHING,
  });

  const getCompaniesFulfilled = (payload) => ({
    type: GET_COMPANIES_FULFILLED,
    payload,
  });

  const getCompaniesRejected = () => ({
    type: GET_COMPANIES_REJECTED,
  });

  export const getCompanies = () => (dispatch) => {
    dispatch(getCompaniesFetching());
    return fetch(URL)
      .then((data) => data.json())
      .then((response) => {
        dispatch(getCompaniesFulfilled(response));
      })
      .catch(() => {
        dispatch(getCompaniesRejected());
      });
  };

  const addCompanyFetching = () => ({
    type: ADD_COMPANIES_FETCHING,
  });


  const addCompanyFulfilled = (payload) => ({
    type: ADD_COMPANIES_FULFILLED,
    payload,
  });

  const addCompanyRejected = () => ({
    type: ADD_COMPANIES_REJECTED,
  });


  export const addCompany = (company) => (dispatch) => {
    dispatch(addCompanyFetching());
    return fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      body: JSON.stringify(company),
    })
      .then((data) => data.json())
      .then((response) => {
        dispatch(addCompanyFulfilled(response));
      })
      .catch(() => {
        dispatch(addCompanyRejected());
      });
  };

  const deleteCompanyFetching = () => ({
    type: DELETE_COMPANIES_FETCHING,
  });

  const deleteCompanyFulfilled = (payload) => ({
    type: DELETE_COMPANIES_FULFILLED,
    payload,
  });

  const deleteCompanyRejected = () => ({
    type: DELETE_COMPANIES_REJECTED,
  });

  export const deleteCompany = (id) => (dispatch) => {
    dispatch(deleteCompanyFetching());
    return fetch(`${URL}/?id=${id}`, { method: "DELETE" })
      .then((data) => data.json())
      .then(() => {
        dispatch(deleteCompanyFulfilled(id));
      })
      .catch(() => {
        dispatch(deleteCompanyRejected());
      });
  };


  const updateCompanyFetching = () => ({
    type: UPDATE_COMPANIES_FETCHING,
  });
  
  const updateCompanyFulfilled = (payload) => ({
    type: UPDATE_COMPANIES_FULFILLED,
    payload,
  });
  
  const updateCompanyRejected = () => ({
    type: UPDATE_COMPANIES_REJECTED,
  });


  export const updateCompany = (payload) => (dispatch) => {
    dispatch(updateCompanyFetching());
    return fetch(`${URL}/?id=${payload.id}`, { method: "PUT" })
      .then((data) => data.json())
      .then(() => {
        dispatch(updateCompanyFulfilled(payload.id));
      })
      .catch(() => {
        dispatch(updateCompanyRejected());
      });
  };

  export const showForm = (id) => ({ type: SHOW_FORM, payload: id });