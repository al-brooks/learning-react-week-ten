import { connect } from 'react-redux';

function BookList(props) {
  const bookItems = props.books.map((book) => {
    return <div key={book.book_id}>{book.name}</div>;
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
    books: state.books
  };
};

export default connect(mapStateToProps)(BookList);
