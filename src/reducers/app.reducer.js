import cst from '../constants';

const initialState = { };

export const app = (state = initialState, action) => {
  switch (action.type) {
    case cst.ACTION_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case cst.ACTION_LOGOUT:
      return {
        ...state,
        user: undefined
      };
    default:
      return state;
  }
};
