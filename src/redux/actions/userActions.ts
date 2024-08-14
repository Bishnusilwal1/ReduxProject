import { Action } from 'redux';

export const SET_USER_DETAILS = 'SET_USER_DETAILS';

interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
}

interface SetUserDetailsAction extends Action<typeof SET_USER_DETAILS> {
  payload: UserDetails;
}

export type UserActions = SetUserDetailsAction;

export const setUserDetails = (userDetails: UserDetails): SetUserDetailsAction => ({
  type: SET_USER_DETAILS,
  payload: userDetails,
});
