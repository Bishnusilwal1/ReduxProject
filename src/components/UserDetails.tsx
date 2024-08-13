import React from "react";
import { useSelector } from "react-redux";

const UserDetails: React.FC = () => {
  const userDetails = useSelector((state: any) => state.user.userDetails);

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-xl rounded-lg border border-gray-200">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
        User Details
      </h2>
      {userDetails ? (
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">First Name:</span>
            <span className="text-gray-900">{userDetails.firstName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Last Name:</span>
            <span className="text-gray-900">{userDetails.lastName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Email:</span>
            <span className="text-gray-900">{userDetails.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700">Gender:</span>
            <span className="text-gray-900">{userDetails.gender}</span>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No details submitted yet.</p>
      )}
    </div>
  );
};

export default UserDetails;
