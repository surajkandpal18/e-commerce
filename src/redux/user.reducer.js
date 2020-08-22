import { UserActionTypes } from "./user.types";

const INITAIL_STATE = {
  currentUser: null,
};

const userReducer = (currentState = INITAIL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...currentState,
        currentUser: action.payload,
      };

    default:
      return currentState;
  }
};

export default userReducer;
