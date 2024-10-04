"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { userSignup } from "@/app/utils/postUsers";
import { useRouter } from "next/navigation";

const signUpSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

interface FormData {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm<FormData>({
    resolver: yupResolver(signUpSchema),
  });
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showPassword, setPasswordVisible] = useState(false);

  const onSubmit = async (data: FormData) => {
    console.log("SignUp submitted", data);
    setApiError(null);
    setSuccessMessage(null);

    const response = await userSignup(data);

    if (response.error) {
      setApiError(response.error);
      console.log("Registration failed:", response.error);
    } else {
      setSuccessMessage("Account created successfully!");

      setTimeout(() => router.push("/login"), 2000);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-brown-100">
      <div className="bg-white w-full h-screen flex flex-col md:flex-row">
      <div className="w-1/2 bg-[#F5F5F5] flex items-center justify-center p-8">
        <Image 
          src="/images/form.png" 
          alt="Login Illustration" 
          width={500} 
          height={300} 
          className="w-full h-auto object-contain max-w-md"
        />
      </div>
        <div className="w-full md:w-1/2 flex justify-center items-center p-8">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-bold text-orange-800 mb-2">SignUp</h1>
            <p className="text-gray-600 mb-6">Welcome To DishHub</p>

            {successMessage && (
              <p className="text-green-500 text-sm mt-2 mb-4">{successMessage}</p>
            )}
            {apiError && (
              <p className="text-red-500 text-sm mt-2 mb-4">{apiError}</p>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="text"
                  {...register("first_name")}
                  placeholder="First Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-gray-900"
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  {...register("last_name")}
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-gray-900"
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  {...register("username")}
                  placeholder="Username"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-gray-900"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-gray-900"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="Password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-gray-900 pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5 text-gray-500" />
                  ) : (
                    <FaEye className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-orange-800 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </form>
            <p className="text-center text-sm text-gray-700 mt-4">
              Already have an account?
              <a
                href="/login"
                className="text-orange-500 hover:text-orange-800 ml-1 font-bold"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
