import { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header id="topHeader">
        <nav id="topNav">
          <h1>HighOnCoding</h1>
          <div id="navBtns">
            <button>Home</button>
            <button>Categories</button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
