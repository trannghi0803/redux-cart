import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "./../components/Cart";
import CartItem from "./../components/CartItem";
import CartResult from "./../components/CartResult";
import * as Message from "./../constants/Message";
import {
  actDeleteProductInCart,
  actChangeMessage,
  actUpdateProductInCart,
} from "./../actions/index";

class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    // console.log(cart);
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showCartResult(cart)}
      </Cart>
    );
  }
  showCartItem = (cart) => {
    var result = (
      <tr>
        <td>{Message.MSG_CART_EMPTY}</td>
      </tr>
    );
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            itemTotal={this.showSubTotal(item.product.price, item.quantity)}
            index={index}
            onDeleteProductInCart={this.props.onDeleteProductInCart}
            onChangeMessage={this.props.onChangeMessage}
            onUpdateProductInCart={this.props.onUpdateProductInCart}
          />
        );
      });
    }
    return result;
  };
  showCartResult = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult total={this.showTotalAmount(cart)} />;
    }
    return result;
  };
  showTotalAmount = (cart) => {
    var total = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity;
      }
    }
    return total;
  };
  showSubTotal = (price, quantity) => {
    // var subTotal = 0;

    return price * quantity;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onDeleteProductInCart: PropTypes.func.isRequired,
  onUpdateProductInCart: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});
const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onUpdateProductInCart: (product, quantity) => {
      dispatch(actUpdateProductInCart(product, quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
