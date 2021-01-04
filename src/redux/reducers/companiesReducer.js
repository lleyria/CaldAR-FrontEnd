import companiesMockData from "../../data/companiesMockData.json"
import { ADD_COMPANY, DEL_COMPANY, UPDATE_COMPANY, SHOW_FORM } from "../types/companyTypes";

const initialState = {
    companies: companiesMockData,
    formVisible: false,
    initialFormState: null,
  };

  const companiesReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_COMPANY:
        return {
          ...state,
          formVisible: false,
          companies: [...state.companies, action.payload],
        };
      case DEL_COMPANY:
        return {
          companies: [
            ...state.companies.filter((company) => company.id !== action.payload),
          ],
        };
      case SHOW_FORM: {
        let result = null;
        if (action.payload) {
          const filteredCompany = state.companies.filter(
            (company) => company.id === action.payload
          );
          result = filteredCompany.lenght !== 0 ? filteredCompany[0] : null;
        }
  
        return { ...state, formVisible: true, initialFormState: result };
      }
      case UPDATE_COMPANY: {
        const companiesWithUpdatedElement = state.companies.map((company) => {
          if (company.id === action.payload.id) {
            company = action.payload;
          }
          return company;
        });
        return {
          ...state,
          formVisible: false,
          companies: companiesWithUpdatedElement,
        };
      }
      default:
        return state;
    }
  };
export default companiesReducer