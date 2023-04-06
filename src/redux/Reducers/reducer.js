import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_COME,
  FETCH_DATA_ERROR,
  NEXT_PAGE,
  PREV_PAGE,
  PAGINATE_DATA
} from "../Constant";
const initialState = {
  user: [],
  skip: 0,
  limit: 8,
  total: 0,
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
      console.log(state.user);
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
      case PAGINATE_DATA :
        return {
            ...state,
            skip: action.skip,
            limit: action.limit,  
        }

    case NEXT_PAGE:
      let pageNumInc = state.page + 1;

      if (pageNumInc >= state.nbPages) {
        pageNumInc = 0;
      }
      return {
        ...state,
        page: pageNumInc,
      };

    case PREV_PAGE:
      let pageNum = state.page - 1;

      if (pageNum <= 0) {
        pageNum = 0;
      }
    default:
      return {
        ...state,
      };
  }
};
