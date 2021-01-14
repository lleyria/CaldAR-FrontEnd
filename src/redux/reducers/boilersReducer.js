import {
  SHOW_FORM,
  GET_BOILERS_FETCHING,
  GET_BOILERS_FULFILLED,
  GET_BOILERS_REJECTED,
  ADD_BOILERS_FULFILLED,
  ADD_BOILERS_FETCHING,
  ADD_BOILERS_REJECTED,
  DELETE_BOILERS_FULFILLED,
  DELETE_BOILERS_FETCHING,
  DELETE_BOILERS_REJECTED,
  UPDATE_BOILERS_FULFILLED,
  UPDATE_BOILERS_FETCHING,
  UPDATE_BOILERS_REJECTED,
} from "../../redux/types/boilersConstants";

const initialState = {
  boilers: [],
  error: false,
  formVisible: false,
  initialFormState: null,
  isLoading: false,
};

const boilersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOILERS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BOILERS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        boilers: action.payload,
      };
    case GET_BOILERS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ADD_BOILERS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_BOILERS_FULFILLED:
      return {
        ...state,
        formVisible: false,
        isLoading: false,
        boilers: [...state.boilers, action.payload],
      };
    case ADD_BOILERS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case DELETE_BOILERS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_BOILERS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        boilers: state.boilers.filter(
          (boiler) => boiler._id !== action.payload
        ),
      };
    case DELETE_BOILERS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case UPDATE_BOILERS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_BOILERS_FULFILLED: {
      const boilersWithUpdatedElement = state.boilers.map((boiler) => {
        if (boiler._id === action.payload._id) {
          boiler = action.payload;
        }
        return boiler;
      });
      return {
        ...state,
        formVisible: false,
        isLoading: false,
        boilers: boilersWithUpdatedElement,
      };
    }
    case UPDATE_BOILERS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case SHOW_FORM: {
      let result = null;
      if (action.payload) {
        const filteredBoiler = state.boilers.filter(
          (boiler) => boiler._id === action.payload
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
