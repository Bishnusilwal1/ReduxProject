import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import useTypedDispatch from "../hooks/useTypedDispatch";
import { setUserDetails } from "../redux/actions/userActions";

const schema = z.object({
  firstName: z.string().nonempty("First Name is required"),
  lastName: z.string().nonempty("Last Name is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  gender: z.enum(["Male", "Female", "Other"], {
    required_error: "Gender is required"
  }),
  password: z.string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
  confirmPassword: z.string()
    .nonempty("Confirm Password is required")
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords must match",
  path: ["confirmPassword"], 
});

type FormValues = z.infer<typeof schema>;

const UserForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: FormValues) => {
    dispatch(setUserDetails(values));
    navigate("/user-details");
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        User Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-gray-600 font-semibold">First Name</label>
          <input
            {...register("firstName")}
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          {errors.firstName && (
            <div className="text-red-600 text-sm">
              {errors.firstName.message}
            </div>
          )}
        </div>
        <div>
          <label className="block text-gray-600 font-semibold">Last Name</label>
          <input
            {...register("lastName")}
            type="text"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          {errors.lastName && (
            <div className="text-red-600 text-sm">
              {errors.lastName.message}
            </div>
          )}
        </div>
        <div>
          <label className="block text-gray-600 font-semibold">Email</label>
          <input
            {...register("email")}
            type="email"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          {errors.email && (
            <div className="text-red-600 text-sm">
              {errors.email.message}
            </div>
          )}
        </div>
        <div>
          <label className="block text-gray-600 font-semibold">Gender</label>
          <div className="mt-2">
            <label className="inline-flex items-center">
              <input
                {...register("gender")}
                type="radio"
                value="Male"
                className="form-radio"
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                {...register("gender")}
                type="radio"
                value="Female"
                className="form-radio"
              />
              <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                {...register("gender")}
                type="radio"
                value="Other"
                className="form-radio"
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
          {errors.gender && (
            <div className="text-red-600 text-sm">
              {errors.gender.message}
            </div>
          )}
        </div>
        <div>
          <label className="block text-gray-600 font-semibold">Password</label>
          <div className="relative">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-2 top-2"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.password && (
            <div className="text-red-600 text-sm">
              {errors.password.message}
            </div>
          )}
        </div>
        <div>
          <label className="block text-gray-600 font-semibold">Confirm Password</label>
          <div className="relative">
            <input
              {...register("confirmPassword")}
              type={showConfirmPassword ? "text" : "password"}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-2 top-2"
            >
              {showConfirmPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.confirmPassword && (
            <div className="text-red-600 text-sm">
              {errors.confirmPassword.message}
            </div>
          )}
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
