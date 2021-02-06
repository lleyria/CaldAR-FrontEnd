import firebase from 'firebase/app';
import 'firebase/auth';
import { store } from '../index';

const firebaseConfig = {

  apiKey: process.env.REACT_APP_API_KEY || '',
  authDomain: process.env.REACT_APP_AUTH_DOMAIN || '',
  projectId: process.env.REACT_APP_PROJECT_ID || '',
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET || '',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || '',
  appId: process.env.REACT_APP_APP_ID || '',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const setToken = async (user) => {
  const auth = store.getState().auth;
  if (auth.authenticated) {
    const token = await user.getIdToken();
    localStorage.setItem('token', token);
  }
};

export const tokenListener = () => {
  firebase.auth().onIdTokenChanged((user) => {
    if (user) {
      setToken(user);
    }
  });
};

export default firebaseApp;