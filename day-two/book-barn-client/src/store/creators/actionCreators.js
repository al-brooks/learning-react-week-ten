import * as actionTypes from '../actions/actionTypes';

// used thunk to dispatch fetch request
export const fetchBooks = () => {
  return (dispatch) => {
    fetch('http://localhost:8080/api/books')
      .then((response) => response.json())
      .then((books) => {
        dispatch({ type: actionTypes.BOOKS_LOADED, payload: books });
      });
  };
};
