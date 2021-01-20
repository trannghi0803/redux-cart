import * as types from "./../constants/ActionType";

var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
  var { product, quantity } = action;
  switch (action.type) {
    case types.ADD_TO_CART:
      // console.log(action);

      var index = state.findIndex((x) => x.product.id === product.id);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({ product, quantity });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case types.DELETE_PRODUCT_IN_CART:
      // var { product } = action;
      var index = state.findIndex((x) => x.product.id === product.id);
      if (index !== -1) {
        state.splice(index, 1);
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    case types.UPDATE_PRODUCT_IN_CART:
      // var { product } = action;
      var index = state.findIndex((x) => x.product.id === product.id);
      if (index !== -1) {
        state[index].quantity = quantity;
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
export default cart;
