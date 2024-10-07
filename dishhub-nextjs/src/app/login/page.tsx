// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { userLogin } from "../utils/userLogin";
// import router from "next/router";
// import Link from "next/link";

// const loginSchema = yup.object().shape({
//   username: yup.string().required("Username is required"),
//   password: yup
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// });

// export default function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: yupResolver(loginSchema),
//   });
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [showPassword, setPasswordVisible] = useState(false);

//   const onSubmit = async (loginData: {
//     username: string;
//     password: string;
//   }) => {
//     const { error } = await userLogin(loginData);
//     if (error) {
//       setErrorMessage(error);
//       setSuccessMessage("");
//     } else {
//       setSuccessMessage("Login successful!");
//       setErrorMessage("");
//       setTimeout(() => router.push("/signup"), 2000);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!showPassword);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white">
//       <div className="bg-[#F5F5F5] w-full h-screen flex flex-col md:flex-row">
//         <div className="flex items-center justify-center p-8">
//           <Image
//             src="/images/form.png"
//             alt="Login Illustration"
//             width={650}
//             height={700}
//             className="" 
//           />
//         </div>
//         <div className="w-full md:w-1/2 flex justify-center items-center p-8">
//           <div className="w-full max-w-md">
//             <h1 className="text-5xl font-bold text-[#883418] mb-6 text-center">
//               Login
//             </h1>
//             <p className="text-black text-center mb-6 text-2xl">
//               Welcome back! To DishHub
//             </p>

//             {errorMessage && (
//               <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
//             )}
//             {successMessage && (
//               <p className="text-green-500 mb-4 text-center">
//                 {successMessage}
//               </p>
//             )}

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   {...register("username")}
//                   placeholder="Username"
//                   className="w-[149%] h-16 px-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] placeholder-gray-400 text-gray-900"
//                 />
//                 {errors.username && (
//                   <p className="text-red-500 mt-1">{errors.username.message}</p>
//                 )}
//               </div>

//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   {...register("password")}
//                   placeholder="Password"
//                   className="w-[149%] h-16 px-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] placeholder-gray-400 text-gray-900 pr-10"
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
//                 >
              
//                 </button>
//                 {errors.password && (
//                   <p className="text-red-500 mt-1">{errors.password.message}</p>
//                 )}
//               </div>
//               <Link href="/dashboard">

//               <button
//                 type="submit"
//                 className={`w-[150%] bg-[#883418] text-[#F8A11B] font-extrabold text-3xl py-5 mt-7 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] hover:bg-[#6B3E11] transition-colors ${
//                   isSubmitting ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Logging in..." : "Login"}
//               </button>
//               </Link>
//             </form>

//             <p className="text-center text-2xl text-black mt-8 ml-20">
//               Do not have an account?{" "}
//               <Link
//                 href="/sign-up"
//                 className="text-[#883418] font-bold hover:underline"
//               >
//                 Sign Up
//               </Link>
//             </p>
//           </div>
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
  const [showPassword, setPasswordVisible] = useState(false);

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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-[#F5F5F5] w-full min-h-screen flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[650px]">
            <Image
              src="/images/form.png"
              alt="Login Illustration"
              width={650}
              height={700}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#883418] mb-4 sm:mb-6 text-center">
              Login
            </h1>
            <p className="text-black text-center mb-4 sm:mb-6 text-xl sm:text-2xl">
              Welcome back! To DishHub
            </p>

            {errorMessage && (
              <p className="text-red-500 mb-4 text-center text-sm sm:text-base">
                {errorMessage}
              </p>
            )}
            {successMessage && (
              <p className="text-green-500 mb-4 text-center text-sm sm:text-base">
                {successMessage}
              </p>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  {...register("username")}
                  placeholder="Username"
                  className="w-full h-12 sm:h-14 md:h-16 px-4 border border-black rounded-md
                           focus:outline-none focus:ring-2 focus:ring-[#8B4513]
                           placeholder-gray-400 text-gray-900"
                />
                {errors.username && (
                  <p className="text-red-500 mt-1 text-sm">{errors.username.message}</p>
                )}
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  placeholder="Password"
                  className="w-full h-12 sm:h-14 md:h-16 px-4 border border-black rounded-md
                           focus:outline-none focus:ring-2 focus:ring-[#8B4513]
                           placeholder-gray-400 text-gray-900 pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                {errors.password && (
                  <p className="text-red-500 mt-1 text-sm">{errors.password.message}</p>
                )}
              </div>

              <Link href="/dashboard" className="block w-full">
                <button
                  type="submit"
                  className={`w-full bg-[#883418] text-[#F8A11B] font-bold
                           text-xl sm:text-2xl md:text-3xl py-3 sm:py-4 md:py-5
                           rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513]
                           hover:bg-[#6B3E11] transition-colors
                           ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </Link>
            </form>

            <p className="text-center text-lg sm:text-xl md:text-2xl text-black mt-6 sm:mt-8">
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

