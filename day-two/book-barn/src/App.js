import { Component } from 'react';
import Header from './Header';
import GenreSearch from './GenreSearch';
import BestList from './BestList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: []
    };
  }

  // using regular fetch method
  // componentDidMount() {
  //   fetch(
  //     'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json'
  //   )
  //     .then((response) => response.json())
  //     .then((books) => {
  //       this.setState({
  //         books: books
  //       });
  //     });
  // }

  // using async function
  async componentDidMount() {
    let response = await fetch(
      'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json'
    );
    let books = await response.json();
    this.setState({
      books: books
    });
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <GenreSearch />
          <BestList books={this.state.books} />
        </main>
      </div>
    );
  }
}

export default App;
