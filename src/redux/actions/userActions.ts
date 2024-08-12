
export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_EMAIL= 'UPDATE_EMAIL';
export const UPDATE_ADDRESS= 'UPDATE_ADDRESS';
export const RESET_FORM = 'RESET_FORM'; 
export const SET_GENDER='SET_GENDER';
export const SUBMIT_FORM = 'SUBMIT_FORM';


export const updateFirstName = (firstName: string) => ({
  type: UPDATE_FIRST_NAME,
  payload: firstName
});

export const updateLastName = (lastName: string) => ({
  type: UPDATE_LAST_NAME,
  payload: lastName
});
export const updateEmail = (email: string) => ({
  type: UPDATE_EMAIL,
  payload: email
});
export const updateAddress = (address: string) => ({
  type: UPDATE_ADDRESS,
  payload: address
});

export const resetForm = () => ({
  type: RESET_FORM
});

export const setGender = (gender: 'Male' | 'Female') => ({
    type: SET_GENDER,
    payload: gender
  });
  export const submitForm = () => ({
    type: SUBMIT_FORM,
  });


interface UpdateFirstNameAction {
  type: typeof UPDATE_FIRST_NAME;
  payload: string;
}

interface UpdateLastNameAction {
  type: typeof UPDATE_LAST_NAME;
  payload: string;
}
interface updateEmailAction {
  type: typeof UPDATE_EMAIL;
  payload: string;
}
interface updateAddressAction {
  type: typeof UPDATE_ADDRESS;
  payload: string;
}
interface ResetFormAction {
  type: typeof RESET_FORM;
}
interface SetGenderAction {
    type: typeof SET_GENDER;
    payload: 'Male' | 'Female';
  }
interface SetSubmitAction{
  type:typeof SUBMIT_FORM;
  
}





export type UserActionTypes =
  | UpdateFirstNameAction
  | UpdateLastNameAction
  | ResetFormAction |SetGenderAction |SetSubmitAction|updateEmailAction|updateAddressAction;
