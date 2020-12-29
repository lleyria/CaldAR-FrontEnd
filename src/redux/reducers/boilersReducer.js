import boilersMockData from "../../data/boilersMockData.json";
import { ADD_BOILER, UPDATE_BOILER } from "../../redux/types/boilersConstants";

const initialState = {
  boilers: boilersMockData,
  formVisible: false,
  initialFormState: null,
};

const boilersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOILER:
      return { ...state, boilers: [...state.boilers, action.payload] };
    default:
      return state;
  }
};

export default boilersReducer;
