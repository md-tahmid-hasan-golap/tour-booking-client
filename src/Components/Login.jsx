import Lottie from "lottie-react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"; // ✅ Correct import
import LoginLottie from "../assets/Lottie/registerLottie.json"; // ✅ fixed extension

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Temporary console (later connect with Firebase)
    console.log({ email, password });
  };

  return (
    <div className="hero bg-base-200 min-h-screen py-10 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 w-full max-w-6xl">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie animationData={LoginLottie} loop={true} />
        </div>

        {/* Login Form */}
        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold mb-6">Login</h1>

            {/* Form */}
            <form onSubmit={handleLogin} className="form-control space-y-3">
              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="example@gmail.com"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  className="input input-bordered w-full"
                  placeholder="••••••••"
                  minLength="6"
                  required
                />
              </div>

              {/* Submit Button */}
              <button className="btn btn-primary mt-4 w-full">Login</button>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Google Sign In */}
            <button className="btn btn-outline w-full flex items-center gap-2">
              <FcGoogle size={24} /> Continue with Google
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center pb-5 text-sm">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
