import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';
import GenreSearch from './GenreSearch';
import BookList from './BookList';

function App(props) {
  const fetchBooks = () => {
    fetch('http://localhost:8080/api/books')
      .then((response) => response.json())
      .then((books) => {
        props.onBooksLoaded(books);
      });
  };
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <main>
        <GenreSearch />
        <BookList />
      </main>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBooksLoaded: (books) => dispatch(actionCreators.saveBooks(books))
  };
};

export default connect(null, mapDispatchToProps)(App);
