import {
  UserActionTypes, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_EMAIL,UPDATE_ADDRESS, RESET_FORM, SET_GENDER, SUBMIT_FORM
} from '../actions/userActions';

interface UserState {
  firstName: string;
  lastName: string;
  email:string;
  address:string;

  
  gender: 'Male' | 'Female';
  isSubmitted: boolean;

}


const initialState: UserState = {
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  gender: 'Male',
  isSubmitted: false,

};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case UPDATE_LAST_NAME:
      return { ...state, lastName: action.payload };

      case UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case UPDATE_ADDRESS:
      return { ...state, address: action.payload };
    case SET_GENDER:
      return { ...state, gender: action.payload };

    case SUBMIT_FORM:
      return { ...state, isSubmitted: true };

    case RESET_FORM:
      return initialState;



    default:
      return state;
  }
};

export default userReducer;
