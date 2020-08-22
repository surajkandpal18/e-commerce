import { CartActionTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_VALUE = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (currentState = INITIAL_VALUE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_COMPONENT:
      return {
        ...currentState,
        hidden: !currentState.hidden,
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...currentState,
        cartItems: removeItemFromCart(currentState.cartItems, action.payload),
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...currentState,
        cartItems: addItemToCart(currentState.cartItems, action.payload),
      };

    case CartActionTypes.CLEAR_ITEMS_FROM_CART:
      return {
        ...currentState,
        cartItems: currentState.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    default:
      return currentState;
  }
};

export default cartReducer;
