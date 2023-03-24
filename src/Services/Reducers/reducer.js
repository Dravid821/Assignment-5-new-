import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_COME,
  FETCH_DATA_ERROR,
  SET_DATA,
  SET_PAGE,
} from "../Constant";
const initialState = {
  user: [],
  currentPage: 1,
  itemsPerPage: 8,
  loading: false,
  err: null,
};
export const datareducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_COME:
      return {
        ...state,
        loading: true,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        err: action.payload,
      };

    case SET_DATA:
      return { ...state, user: action.payload };

    case SET_PAGE:
      return { ...state, currentPage: action.payload };

    default:
      return {
        ...state,
      };
  }
};
