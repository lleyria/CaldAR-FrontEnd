import {
  ADD_BOILER,
  DEL_BOILER,
  UPDATE_BOILER,
} from "../types/boilersConstants";

export const addBoiler = (boiler) => {
  return {
    type: ADD_BOILER,
    payload: boiler,
  };
};

// export const delBoiler = (boiler) => {
//   return {
//     type: DEL_BOILER,
//     payload: boiler.id,
//   };
// };

// export const updateBoiler = (boiler) => {
//   return {
//     type: UPDATE_BOILER,
//     payload: boiler,
//   };
// };
