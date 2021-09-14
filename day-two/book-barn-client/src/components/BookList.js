import { Component } from 'react';

class BookList extends Component {
  render() {
    const books = this.props.books;
    const bookItems = books.map((book, index) => {
      return <div key={index}>{book.title}</div>;
    });

    const display = [];

    for (let i = 0; i < 6; i++) {
      display.push(bookItems[i]);
    }

    return (
      <section>
        <h4>Here's a list of our books!</h4>
        {display}
      </section>
    );
  }
}

export default BookList;
