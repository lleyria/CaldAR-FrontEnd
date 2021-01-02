import {
  ADD_BOILER,
  DEL_BOILER,
  SHOW_FORM,
  UPDATE_BOILER,
} from "../types/boilersConstants";

export const addBoiler = (boiler) => ({ type: ADD_BOILER, payload: boiler });
export const delBoiler = (id) => ({ type: DEL_BOILER, payload: id });
export const showForm = (id) => ({ type: SHOW_FORM, payload: id });
export const updateBoiler = (boiler) => ({ type: UPDATE_BOILER, payload: boiler });
