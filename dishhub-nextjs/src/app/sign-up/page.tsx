// // "use client";
// // import React, { useState } from "react";
// // import Image from "next/image";
// // import { useForm } from "react-hook-form";
// // import { yupResolver } from "@hookform/resolvers/yup";
// // import * as yup from "yup";
// // import { FaEye, FaEyeSlash } from "react-icons/fa";
// // import { userSignup } from "@/app/utils/postUsers";
// // import { useRouter } from "next/navigation";

// // const signUpSchema = yup.object().shape({
// //   first_name: yup.string().required("First name is required"),
// //   last_name: yup.string().required("Last name is required"),
// //   username: yup.string().required("Username is required"),
// //   email: yup.string().email("Invalid email").required("Email is required"),
// //   password: yup
// //     .string()
// //     .min(6, "Password must be at least 6 characters")
// //     .required("Password is required"),
// // });

// // interface FormData {
// //   first_name: string;
// //   last_name: string;
// //   username: string;
// //   email: string;
// //   password: string;
// // }

// // const SignUp = () => {
// //   const router = useRouter();
// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors, isSubmitting },
// //   } = useForm<FormData>({
// //     resolver: yupResolver(signUpSchema),
// //   });
// //   const [apiError, setApiError] = useState<string | null>(null);
// //   const [successMessage, setSuccessMessage] = useState<string | null>(null);
// //   const [showPassword, setPasswordVisible] = useState(false);

// //   const onSubmit = async (data: FormData) => {
// //     console.log("SignUp submitted", data);
// //     setApiError(null);
// //     setSuccessMessage(null);

// //     const response = await userSignup(data);

// //     if (response.error) {
// //       setApiError(response.error);
// //       console.log("Registration failed:", response.error);
// //     } else {
// //       setSuccessMessage("Account created successfully!");

// //       setTimeout(() => router.push("/login"), 2000);
// //     }
// //   };

// //   const togglePasswordVisibility = () => {
// //     setPasswordVisible(!showPassword);
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-brown-100">
// //       <div className="bg-white w-full h-screen flex flex-col md:flex-row">
// //       <div className="w-1/2 bg-[#F5F5F5] flex items-center justify-center p-8">
// //         <Image 
// //           src="/images/form.png" 
// //           alt="Login Illustration" 
// //           width={500} 
// //           height={300} 
// //           className="w-full h-auto object-contain max-w-md"
// //         />
// //       </div>
// //         <div className="w-full md:w-1/2 flex justify-center items-center p-8">
// //           <div className="w-full max-w-md">
// //             <h1 className="text-4xl font-bold text-orange-800 mb-2">SignUp</h1>
// //             <p className="text-gray-600 mb-6">Welcome To DishHub</p>

// //             {successMessage && (
// //               <p className="text-green-500 text-sm mt-2 mb-4">{successMessage}</p>
// //             )}
// //             {apiError && (
// //               <p className="text-red-500 text-sm mt-2 mb-4">{apiError}</p>
// //             )}

// //             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// //               <div>
// //                 <input
// //                   type="text"
// //                   {...register("first_name")}
// //                   placeholder="First Name"
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-gray-900"
// //                 />
// //                 {errors.first_name && (
// //                   <p className="text-red-500 text-sm mt-1">
// //                     {errors.first_name.message}
// //                   </p>
// //                 )}
// //               </div>
// //               <div>
// //                 <input
// //                   type="text"
// //                   {...register("last_name")}
// //                   placeholder="Last Name"
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-gray-900"
// //                 />
// //                 {errors.last_name && (
// //                   <p className="text-red-500 text-sm mt-1">
// //                     {errors.last_name.message}
// //                   </p>
// //                 )}
// //               </div>
// //               <div>
// //                 <input
// //                   type="text"
// //                   {...register("username")}
// //                   placeholder="Username"
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-gray-900"
// //                 />
// //                 {errors.username && (
// //                   <p className="text-red-500 text-sm mt-1">
// //                     {errors.username.message}
// //                   </p>
// //                 )}
// //               </div>
// //               <div>
// //                 <input
// //                   type="email"
// //                   {...register("email")}
// //                   placeholder="Email"
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-gray-900"
// //                 />
// //                 {errors.email && (
// //                   <p className="text-red-500 text-sm mt-1">
// //                     {errors.email.message}
// //                   </p>
// //                 )}
// //               </div>
// //               <div className="relative">
// //                 <input
// //                   type={showPassword ? "text" : "password"}
// //                   {...register("password")}
// //                   placeholder="Password"
// //                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder-gray-400 text-gray-900 pr-10"
// //                 />
// //                 <button
// //                   type="button"
// //                   onClick={togglePasswordVisibility}
// //                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
// //                 >
// //                   {showPassword ? (
// //                     <FaEyeSlash className="h-5 w-5 text-gray-500" />
// //                   ) : (
// //                     <FaEye className="h-5 w-5 text-gray-500" />
// //                   )}
// //                 </button>
// //                 {errors.password && (
// //                   <p className="text-red-500 text-sm mt-1">
// //                     {errors.password.message}
// //                   </p>
// //                 )}
// //               </div>
// //               <button
// //                 type="submit"
// //                 className="w-full bg-orange-800 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
// //               >
// //                 Sign Up
// //               </button>
// //             </form>
// //             <p className="text-center text-sm text-gray-700 mt-4">
// //               Already have an account?
// //               <a
// //                 href="/login"
// //                 className="text-orange-500 hover:text-orange-800 ml-1 font-bold"
// //               >
// //                 Login
// //               </a>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SignUp;



// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { userSignup } from "../utils/postUsers";
// import { useRouter } from "next/navigation";
// import { setCookie, getCookie } from "cookies-next";
// import Link from "next/link";

// const signUpSchema = yup.object().shape({
//   first_name: yup.string().required("First name is required"),
//   last_name: yup.string().required("Last name is required"),
//   username: yup.string().required("Username is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   password: yup
//     .string()
//     .min(6, "Password must be at least 6 characters")
//     .required("Password is required"),
// });

// interface FormData {
//   first_name: string;
//   last_name: string;
//   username: string;
//   email: string;
//   password: string;
// }

// const SignUp = () => {
//   const router = useRouter();
//   const [isCheckingLogin, setIsCheckingLogin] = useState(true);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkLoginStatus = () => {
//       const loggedIn = getCookie("isLoggedIn");
//       setIsLoggedIn(!!loggedIn);
//       setIsCheckingLogin(false);
//     };

//     checkLoginStatus();
//   }, []);

//   // useEffect(() => {
//   //   if (isCheckingLogin) return;
//   //   if (isLoggedIn) {
//   //     router.push("/dashboard");
//   //   }
//   // }, [isCheckingLogin, isLoggedIn, router]);

//   const {
//     register,
//     handleSubmit,

//     formState: { errors},
//   } = useForm<FormData>({
//     resolver: yupResolver(signUpSchema),
//   });

//   const [apiError, setApiError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const [showPassword, setPasswordVisible] = useState(false);

//   const onSubmit = async (data: FormData) => {
//     console.log("SignUp submitted", data);
//     setApiError(null);
//     setSuccessMessage(null);

//     const response = await userSignup(data);

//     if (response.error) {
//       setApiError(response.error);
//       console.log("Registration failed:", response.error);
//     } else {
//       setSuccessMessage("Account created successfully!");
//       setCookie("isLoggedIn", "true", {
//         maxAge: 60 * 60 * 24 * 365,
//         path: "/",
//       });
//       setTimeout(() => router.push("/login"), 2000);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!showPassword);
//   };

//   if (isCheckingLogin) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white">
//       <div className="bg-[#F5F5F5] w-full h-screen flex flex-col md:flex-row">
//         <div className="flex items-center justify-center p-8">
//           <Image 
//             src="/images/form.png" 
//             alt="Sign Up Illustration" 
//             width={700}  
//             height={700}
//             className="  "
//           />
//         </div>
//         <div className="w-full md:w-1/2 flex justify-center items-center p-8">
//           <div className="w-full max-w-md">
//             <h1 className="text-5xl font-bold text-[#883418] mb-6 text-center">Sign Up</h1>
//             <p className="text-black text-center mb-6 text-2xl">Welcome to DishHub</p>

//             {successMessage && (
//               <p className="text-green-500 text-sm mt-2 mb-4">
//                 {successMessage}
//               </p>
//             )}
//             {apiError && (
//               <p className="text-red-500 text-sm mt-2 mb-4">{apiError}</p>
//             )}

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//               <div>
//                 <input
//                   type="text"
//                   {...register("first_name")}
//                   placeholder="First Name"
//                   className="w-[135%] h-16 px-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] placeholder-gray-400 text-gray-900"
//                 />
//                 {errors.first_name && (
//                   <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
//                 )}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   {...register("last_name")}
//                   placeholder="Last Name"
//                   className="w-[135%] h-16 px-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] placeholder-gray-400 text-gray-900 "
//                 />
//                 {errors.last_name && (
//                   <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>
//                 )}
//               </div>
//               <div>
//                 <input
//                   type="text"
//                   {...register("username")}
//                   placeholder="Username"
//                   className="w-[135%] h-16 px-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] placeholder-gray-400 text-gray-900"
//                 />
//                 {errors.username && (
//                   <p className="text-red-500 text-sm mt-1 ">{errors.username.message}</p>
//                 )}
//               </div>
//               <div>
//                 <input
//                   type="email"
//                   {...register("email")}
//                   placeholder="Email"
//                   className="w-[135%] h-16 px-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] placeholder-gray-400 text-gray-900"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//                 )}
//               </div>
//               <div className="relative w-[100%]">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   {...register("password")}
//                   placeholder="Password"
//                   className="w-[135%] h-16 px-4 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] placeholder-gray-400 text-gray-900 pr-10"
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute inset-y-0 ml-[550px] flex items-center text-sm leading-5"
//                 >
//                   {showPassword ? <FaEyeSlash /> : <FaEye />}
//                 </button>
//                 {errors.password && (
//                   <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="w-[136%] bg-[#883418] text-[#F8A11B] font-extrabold text-3xl py-5 mt-7 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] hover:bg-[#6B3E11] transition-colors"
//               >
//                 Sign Up
//             </button>
//             </form>

//             <p className="text-center text-2xl text-black mt-8 ml-20">
//               Already have an account?{" "}
//               <Link
//                 href="/login"
//                 className="text-[#883418] font-bold hover:underline"
//               >
//                 LogIn
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;




"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { userSignup } from "../utils/postUsers";
import { useRouter } from "next/navigation";
import { setCookie, getCookie } from "cookies-next";
import Link from "next/link";

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
  const [isCheckingLogin, setIsCheckingLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setPasswordVisible] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = getCookie("isLoggedIn");
      setIsLoggedIn(!!loggedIn);
      setIsCheckingLogin(false);
    };

    checkLoginStatus();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signUpSchema),
  });

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
      setCookie("isLoggedIn", "true", {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
      });
      setTimeout(() => router.push("/login"), 1000);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!showPassword);
  };

  if (isCheckingLogin) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-[#F5F5F5] w-full min-h-screen flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="relative w-full max-w-[500px] aspect-square ml-28">
            <Image 
              src="/images/form.png" 
              alt="Sign Up Illustration" 
              layout="fill"
              objectFit="contain"
              className="sm:max-w-md lg:max-w-lg xl:max-w-xl"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-8">
          <div className="w-full max-w-md space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#883418] mb-4 sm:mb-6 text-center">
              Sign Up
            </h1>
            <p className="text-black text-center mb-4 sm:mb-6 text-xl sm:text-2xl">
              Welcome to DishHub
            </p>

            {successMessage && (
              <p className="text-green-500 text-sm mt-2 mb-4">{successMessage}</p>
            )}
            {apiError && (
              <p className="text-red-500 text-sm mt-2 mb-4">{apiError}</p>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Form inputs with responsive styles */}
              <div className="space-y-4">
                <input
                  type="text"
                  {...register("first_name")}
                  placeholder="First Name"
                  className="w-full h-12 sm:h-14 lg:h-16 px-4 border border-black rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-[#8B4513] 
                           placeholder-gray-400 text-gray-900"
                />
                {errors.first_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.first_name.message}</p>
                )}

                <input
                  type="text"
                  {...register("last_name")}
                  placeholder="Last Name"
                  className="w-full h-12 sm:h-14 lg:h-16 px-4 border border-black rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-[#8B4513] 
                           placeholder-gray-400 text-gray-900"
                />
                {errors.last_name && (
                  <p className="text-red-500 text-sm mt-1">{errors.last_name.message}</p>
                )}

                <input
                  type="text"
                  {...register("username")}
                  placeholder="Username"
                  className="w-full h-12 sm:h-14 lg:h-16 px-4 border border-black rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-[#8B4513] 
                           placeholder-gray-400 text-gray-900"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                )}

                <input
                  type="email"
                  {...register("email")}
                  placeholder="Email"
                  className="w-full h-12 sm:h-14 lg:h-16 px-4 border border-black rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-[#8B4513] 
                           placeholder-gray-400 text-gray-900"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Password"
                    className="w-full h-12 sm:h-14 lg:h-16 px-4 border border-black rounded-md 
                             focus:outline-none focus:ring-2 focus:ring-[#8B4513] 
                             placeholder-gray-400 text-gray-900 pr-10"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#883418] text-[#F8A11B] font-bold 
                         text-xl sm:text-2xl lg:text-3xl py-3 sm:py-4 lg:py-5 mt-6 
                         rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4513] 
                         hover:bg-[#6B3E11] transition-colors"
              >
                Sign Up
              </button>
            </form>

            <p className="text-center text-lg sm:text-xl lg:text-2xl text-black mt-6 sm:mt-8">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#883418] font-bold hover:underline"
              >
                LogIn
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;