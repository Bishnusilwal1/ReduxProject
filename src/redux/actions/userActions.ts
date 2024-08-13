import { Action } from 'redux';

// Action type constant
export const SET_USER_DETAILS = 'SET_USER_DETAILS';

// Define the structure of the payload
interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}

// Action interface for SetUserDetails
interface SetUserDetailsAction extends Action<typeof SET_USER_DETAILS> {
  payload: UserDetails;
}

// Export action types
export type UserActions = SetUserDetailsAction;

// Action creator
export const setUserDetails = (userDetails: UserDetails): SetUserDetailsAction => ({
  type: SET_USER_DETAILS,
  payload: userDetails,
});
