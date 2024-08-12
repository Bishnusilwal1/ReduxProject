import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { updateFirstName, updateLastName,updateEmail, updateAddress, setGender, resetForm, submitForm } from '../redux/actions/userActions';

const UserForm: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  if (!user) {
    console.error("User state is undefined");
    return null;
  }

  const { firstName, lastName, email, address, gender, isSubmitted } = user;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    dispatch(submitForm());
  };

  return (
    <div className='p-4'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => dispatch(updateFirstName(e.target.value))}
            placeholder="First Name"
            className='text-green-700 h-10 w-36 mt-7 border-[3px] border-amber-500'
          />
        </div>
        <div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => dispatch(updateLastName(e.target.value))}
            placeholder="Last Name"
            className='text-green-700 h-10 w-36 mt-5 border-[3px] border-amber-500'
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => dispatch(updateEmail(e.target.value))}
            placeholder="email"
            className='text-green-700 h-10 w-36 mt-7 border-[3px] border-amber-500'
          />
        </div>
        <div>
          <input
            type="text"
            value={address}
            onChange={(e) => dispatch(updateAddress(e.target.value))}
            placeholder="Address"
            className='text-green-700 h-10 w-36 mt-7 border-[3px] border-amber-500'
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => dispatch(setGender(e.target.value as 'Male' | 'Female'))}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button type="submit" className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'>
          Submit
        </button>
        <button type="button" onClick={() => dispatch(resetForm())} className='ml-4 bg-red-500 text-white px-4 py-2 rounded'>
          Reset Form
        </button>
      </form>

      {isSubmitted && (
        <div className='mt-10 p-5 border-[3px] border-green-500'>
          <h2 className='font-bold'>Submitted User Details:</h2>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>First Name: {email}</p>
          <p>Last Name: {address}</p>
          <p>Gender: {gender}</p>
        </div>
      )}
    </div>
  );
};

export default UserForm;
