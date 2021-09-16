import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CART_LOADED:
      return {
        ...state,
        cart: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
