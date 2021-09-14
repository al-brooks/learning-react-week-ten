import * as actionTypes from '../actions/actionTypes';

export const saveBooks = (books) => {
  return {
    type: actionTypes.BOOKS_LOADED,
    payload: books
  };
};
