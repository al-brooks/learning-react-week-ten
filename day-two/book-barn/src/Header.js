import { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <h4>goodreads</h4>
          <button>Home</button>
          <button>My Books</button>
          <button>Browse</button>
          <button>Community</button>
          <input type="text" placeholder="Search books" />
          <button>Sign In</button>
          <button>Join</button>
        </nav>
      </header>
    );
  }
}

export default Header;
