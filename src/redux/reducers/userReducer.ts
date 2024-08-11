import { UserActionTypes, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, RESET_FORM,SET_GENDER} from '../actions/userActions';

interface UserState {
  firstName: string;
  lastName: string;
  gender: 'Male' | 'Female';
}


const initialState: UserState = {
  firstName: '',
  lastName: '',
  gender: 'Male'
};

const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case UPDATE_LAST_NAME:
      return { ...state, lastName: action.payload };
      case SET_GENDER:
      return { ...state, gender: action.payload };

    case RESET_FORM:
      return initialState; // Reset to initial state
    default:
      return state;
  }
};

export default userReducer;
