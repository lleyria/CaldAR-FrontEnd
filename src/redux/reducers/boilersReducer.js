import boilersMockData from "../../data/boilersMockData.json";
import {
  ADD_BOILER,
  DEL_BOILER,
  SHOW_FORM,
  UPDATE_BOILER,
} from "../../redux/types/boilersConstants";

const initialState = {
  boilers: boilersMockData,
  formVisible: false,
  initialFormState: null,
};

const boilersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOILER:
      return { ...state, boilers: [...state.boilers, action.payload] };
    case DEL_BOILER:
      return {
        boilers: [
          ...state.boilers.filter((boiler) => boiler.id !== action.payload),
        ],
      };
    case SHOW_FORM: {
      let result = null;
      if (action.payload) {
        const filteredBoiler = state.boilers.filter(
          (boiler) => boiler.id === action.payload
        );
        result = filteredBoiler.lenght !== 0 ? filteredBoiler[0] : null;
      }
      return { ...state, formVisible: true, initialFormState: result };
    }
    default:
      return state;
  }
};

export default boilersReducer;
