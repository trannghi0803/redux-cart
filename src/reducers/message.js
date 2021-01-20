import * as types from "../constants/ActionType";
import * as Message from "./../constants/Message";

// var data = JSON.parse(localStorage.getItem("CART"));
var initialState = Message.MSG_WELLCOME;

const message = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_MESSAGE:
      return action.message;
    default:
      return state;
  }
};
export default message;
