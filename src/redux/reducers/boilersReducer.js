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
      return {
        ...state,
        formVisible: false,
        boilers: [...state.boilers, action.payload],
      };
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
    case UPDATE_BOILER: {
      const boilersWithUpdatedElement = state.boilers.map((element) => {
        if (element.id === action.payload.id) {
          element.id = action.payload.id;
          element.lot = action.payload.lot;
          element.companyName = action.payload.companyName;
          element.boilerType = action.payload.boilerType;
          element.installationDate = action.payload.installationDate;
          element.fabricationDate = action.payload.fabricationDate;
          element.expirationDate = action.payload.expirationDate;
        }
        return element;
      });
      return {
        ...state,
        formVisible: false,
        boilers: boilersWithUpdatedElement,
      };
    }
    default:
      return state;
  }
};

export default boilersReducer;
