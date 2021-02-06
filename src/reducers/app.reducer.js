import cst from '../constants';

const initialState = { page: cst.PAGE_HOME, loading: false };

export const app = (state = initialState, action) => {
  switch (action.type) {
    case cst.ACTION_LOADING:
      return {
        ...state,
        loading: true,
      }
    case cst.ACTION_LOADED:
      return {
        ...state,
        loading: false,
      }
    case cst.ACTION_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case cst.ACTION_LOGOUT:
      return {
        ...state,
        user: undefined,
      };
    case cst.ACTION_SWITCH_PAGE: {
      return {
        ...state,
        page: action.payload,
      }
    }
    default:
      return state;
  }
};
