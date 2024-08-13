import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import  useTypedDispatch  from '../hooks/useTypedDispatch'; 
import { setUserDetails } from '../redux/actions/userActions'; 

const UserForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch(); 
  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    gender: Yup.string().required('Gender is required'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
  };

  const onSubmit = (values: {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
  }) => {
    dispatch(setUserDetails(values));
    navigate('/user-details');
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">User Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label className="block text-gray-600 font-semibold">First Name</label>
            <Field
              name="firstName"
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <ErrorMessage name="firstName" component="div" className="text-red-600 text-sm" />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Last Name</label>
            <Field
              name="lastName"
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <ErrorMessage name="lastName" component="div" className="text-red-600 text-sm" />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Email</label>
            <Field
              name="email"
              type="email"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Gender</label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <Field
                  name="gender"
                  type="radio"
                  value="Male"
                  className="form-radio"
                />
                <span className="ml-2">Male</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <Field
                  name="gender"
                  type="radio"
                  value="Female"
                  className="form-radio"
                />
                <span className="ml-2">Female</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <Field
                  name="gender"
                  type="radio"
                  value="Other"
                  className="form-radio"
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
            <ErrorMessage name="gender" component="div" className="text-red-600 text-sm" />
          </div>
          <div className="mt-4">
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
