import { connect } from 'react-redux';

function BookList(props) {
  const bookItems = props.books.map((book) => {
    return (
      <div key={book.book_id}>
        <h5>{book.name}</h5>
        <img
          src={book.imageurl}
          alt={book.name + ' cover'}
          style={{ height: 500 + 'px' }}
        />
      </div>
    );
  });

  return (
    <section>
      <h4>Here's a list of our books!</h4>
      {bookItems}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.booksReducer.books
  };
};

export default connect(mapStateToProps)(BookList);
