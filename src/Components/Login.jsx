import Lottie from "lottie-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import LoginLottie from "../assets/Lottie/registerLottie.json.json";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen my-7 rounded-lg px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2">
          <Lottie animationData={LoginLottie} loop={true}></Lottie>
        </div>

        {/* Login Form */}
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold mb-4">Login Now!</h1>
            <form className="form-control space-y-3">
              {/* Email */}
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Enter your email"
                required
              />

              {/* Password */}
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Enter your password"
                required
              />

              {/* Submit Button */}
              <button className="btn btn-neutral mt-4 w-full">Login</button>
            </form>
            <button className="btn btn-outline">
              <FcGoogle size={25} /> Sign In With Google
            </button>
          </div>
          <p className="text-center pb-5">
            Already Does't Have An Account{" "}
            <Link to="/register" className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
