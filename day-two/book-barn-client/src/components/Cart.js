import { connect } from 'react-redux';

function Cart(props) {
  return (
    <div>
      <span>Cart</span>
      <span>({props.cart.length})</span>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart
  };
};

export default connect(mapStateToProps)(Cart);
