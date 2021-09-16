import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';
import GenreSearch from './GenreSearch';
import BookList from './BookList';

function App(props) {
  useEffect(() => {
    props.onBooksLoaded();
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
    onBooksLoaded: () => dispatch(actionCreators.fetchBooks())
  };
};

export default connect(null, mapDispatchToProps)(App);
