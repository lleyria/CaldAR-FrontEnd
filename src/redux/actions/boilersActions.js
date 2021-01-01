import {
  ADD_BOILER,
  SHOW_FORM,
  DEL_BOILER,
  UPDATE_BOILER,
} from "../types/boilersConstants";

export const addBoiler = (boiler) => {
  return {
    type: ADD_BOILER,
    payload: boiler,
  };
};

export const showForm = (id) => {
  return {
    type: SHOW_FORM,
    payload: id,
  };
};

export const delBoiler = (id) => {
  return {
    type: DEL_BOILER,
    payload: id,
  };
};

// export const updateBoiler = (boiler) => {
//   return {
//     type: UPDATE_BOILER,
//     payload: boiler,
//   };
// };
