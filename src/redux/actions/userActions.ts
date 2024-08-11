
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const RESET_FORM = 'RESET_FORM'; 
export const SET_GENDER='SET_GENDER'


export const updateFirstName = (firstName: string) => ({
  type: UPDATE_FIRST_NAME,
  payload: firstName
});

export const updateLastName = (lastName: string) => ({
  type: UPDATE_LAST_NAME,
  payload: lastName
});

export const resetForm = () => ({
  type: RESET_FORM
});

export const setGender = (gender: 'Male' | 'Female') => ({
    type: SET_GENDER,
    payload: gender
  });


interface UpdateFirstNameAction {
  type: typeof UPDATE_FIRST_NAME;
  payload: string;
}

interface UpdateLastNameAction {
  type: typeof UPDATE_LAST_NAME;
  payload: string;
}

interface ResetFormAction {
  type: typeof RESET_FORM;
}
interface SetGenderAction {
    type: typeof SET_GENDER;
    payload: 'Male' | 'Female';
  }


export type UserActionTypes =
  | UpdateFirstNameAction
  | UpdateLastNameAction
  | ResetFormAction |SetGenderAction;
