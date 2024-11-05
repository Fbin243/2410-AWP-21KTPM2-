import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/user/register", data);
      alert(response.data.message);
    } catch (error: any) {
      alert(error.response.data.message || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required", pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ })}
            className="mt-1 block w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" },
            })}
            className="mt-1 block w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
