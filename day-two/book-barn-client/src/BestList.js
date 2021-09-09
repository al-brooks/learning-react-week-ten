import { Component } from 'react';

class BestList extends Component {
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
        <h6>BEST BOOKS OF THE MONTH: OCTOBER 2018</h6>
        {display}
      </section>
    );
  }
}

export default BestList;
