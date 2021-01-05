// import companiesMockData from "../../data/companiesMockData.json"
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
} from "../types/companyTypes";

const initialState = {
  companies: [],
  error: false,
  formVisible: false,
  initialFormState: null,
  isLoading: false,
};

  const companiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COMPANIES_FETCHING:
        return {
          ...state,
          isLoading: true,
        };
        case GET_COMPANIES_FULFILLED:
          return {
            ...state,
            isLoading: false,
            companies: action.payload,
          };
          case GET_COMPANIES_REJECTED:
            return {
              ...state,
              isLoading: false,
              error: true,
          };
          case ADD_COMPANIES_FETCHING:
            return {
              ...state,
              isLoading: true,
          };
          case ADD_COMPANIES_FULFILLED:
            return {
              ...state,
              formVisible: false,
              isLoading: false,
              companies: [...state.companies, action.payload],
            };
            case ADD_COMPANIES_REJECTED:
              return {
                ...state,
                isLoading: false,
                error: true,
            };
            case DELETE_COMPANIES_FETCHING:
              return {
                ...state,
                isLoading: true,
            };
            case DELETE_COMPANIES_FULFILLED:
              return {
                ...state,
                isLoading: false,
                companies: state.companies.filter(
                  (company) => company._id !== action.payload
                ),
            };
            case DELETE_COMPANIES_REJECTED:
              return {
                ...state,
                isLoading: false,
                error: true,
            };
            case UPDATE_COMPANIES_FETCHING:
              return {
                ...state,
                isLoading: true,
            };
            case UPDATE_COMPANIES_FULFILLED: {
              const companiesWithUpdatedElement = state.companies.map((company) => {
                if (company._id === action.payload._id) {
                  company = action.payload;
                }
                return company;
              });
              return {
                ...state,
                formVisible: false,
                isLoading: false,
                companies: companiesWithUpdatedElement,
              };
            }
            case UPDATE_COMPANIES_REJECTED:
              return {
                ...state,
                isLoading: false,
                error: true,
            };
            case SHOW_FORM: {
              let result = null;
                if (action.payload) {
                  const filteredCompany = state.companies.filter(
                    (company) => company._id === action.payload
                  );
                  result = filteredCompany.lenght !== 0 ? filteredCompany[0] : null;
                }            
                  return { ...state, formVisible: true, initialFormState: result };
                }
                default:
                  return state;
              }
            };
export default companiesReducer