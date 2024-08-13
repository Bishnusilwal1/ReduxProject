

import { UserActions, SET_USER_DETAILS } from '../actions/userActions';

interface UserState {
  userDetails: any;
}

const initialState: UserState = {
  userDetails: null,
};

const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
