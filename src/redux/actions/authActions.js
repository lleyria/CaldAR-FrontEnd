import {
    LOGIN_FETCHING,
    LOGIN_FULFILLED,
    LOGIN_REJECTED,
    SET_AUTHENTICATION,
    SIGNOUT_FETCHING,
    SIGNOUT_FULFILLED,
    SIGNOUT_REJECTED
  } from '../types/authTypes.js';
  import Firebase from '../../firebase/index'
  
  //const URL = "https://app-caldar.herokuapp.com/";
  
  const loginFetching = () => {
    return {
      type: LOGIN_FETCHING
    }
  };
  
  const loginFulfilled = () => {
    return {
      type: LOGIN_FULFILLED
    }
  };
  
  const loginRejected = () => {
    return {
      type: LOGIN_REJECTED
    }
  };
  
  export const loginWithFirebase = credentials => dispatch => {
    dispatch(loginFetching());
    return Firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(async (response) => {
        console.log("success:", response);
        const token = await response.user.getIdToken();
        localStorage.setItem('token', token)
        return dispatch(loginFulfilled());
      })
      .catch((e) => {
        console.log("error,", e);
        return dispatch(loginRejected());
      })
  };
  
  export const setAuthentication = () => {
    return ({
      type: SET_AUTHENTICATION
    })
  };
  
  const signoutFetching = () => {
    return {
      type: SIGNOUT_FETCHING
    }
  };
  
  const signoutFulfilled = () => {
    return {
      type: SIGNOUT_FULFILLED
    }
  };
  
  const signoutRejected = () => {
    return {
      type: SIGNOUT_REJECTED
    }
  };
  
  export const signoutAction = () => dispatch => {
    dispatch(signoutFetching());
    return Firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem('token');
        return dispatch(signoutFulfilled());
      })
      .catch(() => {
        return dispatch(signoutRejected());
      });
  };

