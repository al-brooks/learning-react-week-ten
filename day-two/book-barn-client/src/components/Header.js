import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import * as actionCreators from '../store/creators/actionCreators';
import Cart from './Cart';

function Header(props) {
  useEffect(() => {
    props.onCartLoaded();
  }, []);

  return (
    <header>
      <nav>
        <h4>goodreads</h4>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/AddBook">Add Book</NavLink>
        <button>My Books</button>
        <button>Browse</button>
        <button>Community</button>
        <input type="text" placeholder="Search books" />
        <button>Sign In</button>
        <button>Join</button>
        <Cart />
      </nav>
    </header>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCartLoaded: () => dispatch(actionCreators.fetchCart())
  };
};

export default connect(null, mapDispatchToProps)(Header);
