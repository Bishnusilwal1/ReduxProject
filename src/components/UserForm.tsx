import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { updateFirstName, updateLastName, setGender, resetForm } from '../redux/actions/userActions';

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  if (!user) {
    console.error("User state is undefined");
    return null;
  }

  const { firstName, lastName,gender } = user;

  return (
    <div>
      <div>
        <input
          type="text"
          value={firstName}
          onChange={(e) => dispatch(updateFirstName(e.target.value))}
          placeholder="First Name"
        />
      </div>
      <div>
        <input
          type="text"
          value={lastName}
          onChange={(e) => dispatch(updateLastName(e.target.value))}
          placeholder="Last Name"
        />
      </div>
      <div>
        <label>Gender:</label>
        <select
          value={gender}
          onChange={(e) => dispatch(setGender(e.target.value as 'Male' | 'Female'))}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          
        </select>
      </div>
      <button onClick={() => dispatch(resetForm())}>Reset Form</button>
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Gender: {gender}</p>
      </div>
    </div>
  );
};

export default UserForm;
