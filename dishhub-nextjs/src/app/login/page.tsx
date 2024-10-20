// "use client";
// import { useState } from 'react';
// import Image from 'next/image';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { userLogin } from '../utils/userLogin';
// import router from 'next/router';

// const loginSchema = yup.object().shape({
//   username: yup.string().required('Username is required'),
//   password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
// });

// const customStyles = {
//   loginButton: {
//     backgroundColor: '#883418',
//     '&:hover': {
//       backgroundColor: '#6B3E11',
//     },
//   },
//   brownText: {
//     color: '#883418',
//     '&:hover': {
//       color: '#6B3E11',
//     },
//   },
// };

// export default function Login() {
//   const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
//     resolver: yupResolver(loginSchema),
//   });
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const onSubmit = async (loginData: { username: string; password: string }) => {
//     const { error } = await userLogin(loginData);
//     if (error) {
//       setErrorMessage(error);
//       setSuccessMessage('');
//     } else {
//       setSuccessMessage('Login successful!');

//       setErrorMessage('Failed to login');

//       setTimeout(() => router.push("/signup"), 2000);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-white">
//       <div className="w-1/2 bg-[#F5F5F5] flex items-center justify-center p-8">
//         <Image
//           src="/images/form.png"
//           alt="Login Illustration"
//           width={500}
//           height={300}
//           className="w-full h-auto object-contain max-w-md"
//         />
//       </div>
//       <div className="w-1/2 flex items-center justify-center">
//         <div className="w-full max-w-md px-8">
//           <h1 className="text-4xl font-bold text-[#883418] mb-4 text-center">Login</h1>
//           <p className="text-black text-center mb-8 text-xl">Welcome back! To DishHub</p>

//           {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
//           {successMessage && <p className="text-green-500 mb-4 text-center">{successMessage}</p>}

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div>
//               <label htmlFor="username" className="block mb-2 text-sm font-bold text-black">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 {...register('username')}
//                 className="w-full h-12 px-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
//               />
//               {errors.username && <p className="text-red-500 mt-1">{errors.username.message}</p>}
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-2 text-sm font-bold text-black">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 {...register('password')}
//                 className="w-full h-12 px-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
//               />
//               {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
//             </div>

//             <button
//               type="submit"
//               className={`w-full bg-[#883418] text-[#F8A11B] font-extrabold text-xl py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:ring-opacity-50 hover:bg-[#6B3E11] transition-colors ${
//                 isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
//               }`}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Logging in...' : 'Login'}
//             </button>
//           </form>

//           <p className="text-center text-lg text-black mt-8">
//             Do not have an account? <a href="/sign-up" className="text-[#883418] font-bold hover:underline">Sign Up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { userLogin } from "../utils/userLogin";
import router from "next/router";
import Link from "next/link";

const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (loginData: {
    username: string;
    password: string;
  }) => {
    const { error } = await userLogin(loginData);
    if (error) {
      setErrorMessage(error);
      setSuccessMessage("");
    } else {
      setSuccessMessage("Login successful!");
      setErrorMessage("");
      setTimeout(() => router.push("/signup"), 2000);
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 bg-[#F5F5F5] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] aspect-square">
            <Image
              src="/images/form.png"
              alt="Login Illustration"
              layout="fill"
              objectFit="contain"
              className="sm:max-w-md lg:max-w-lg xl:max-w-xl"
              priority
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="w-full max-w-[400px] sm:max-w-[450px] space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#883418]">
                Login
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-black">
                Welcome back! To DishHub
              </p>
            </div>

            {/* Alert Messages */}
            <div className="space-y-2">
              {errorMessage && (
                <p className="text-red-500 text-center text-sm sm:text-base">
                  {errorMessage}
                </p>
              )}
              {successMessage && (
                <p className="text-green-500 text-center text-sm sm:text-base">
                  {successMessage}
                </p>
              )}
            </div>

            {/* Login Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 sm:space-y-6"
            >
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="block text-sm sm:text-base font-bold text-black"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  {...register("username")}
                  className="w-full h-12 sm:h-14 lg:h-16 px-4 border border-black rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-[#8B4513] 
                           placeholder-gray-400 text-gray-900"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm sm:text-base font-bold text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  className="w-full h-12 sm:h-14 lg:h-16 px-4 border border-black rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-[#8B4513] 
                           placeholder-gray-400 text-gray-900"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#883418] text-[#F8A11B] font-bold 
                         text-lg sm:text-xl lg:text-2xl py-3 sm:py-4 lg:py-5 
                         rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] 
                         hover:bg-[#6B3E11] transition-colors
                         ${
                           isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                         }`}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* Sign Up Link */}
            <p className="text-center text-base sm:text-lg lg:text-xl text-black">
              Do not have an account?{" "}
              <Link
                href="/sign-up"
                className="text-[#883418] font-bold hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
