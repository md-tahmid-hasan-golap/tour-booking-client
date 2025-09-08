import React, { useContext } from "react";
import register from "../assets/Lottie/registerLottie.json"; // ✅ double .json ফিক্স করা হলো
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom"; // ✅ router-dom থেকে ইম্পোর্ট
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const Register = () => {
  const { creatUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const address = form.address.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    // Temporary Console (পরে Firebase এ connect করবি)
    console.log({ name, address, phone, email, password });
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen py-10 px-4 my-5 rounded-md">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12 w-full max-w-6xl">
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie animationData={register} loop={true} />
        </div>

        {/* Register Form */}
        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold mb-6">
              Create Your Account
            </h1>

            {/* Form */}
            <form onSubmit={handleRegister} className="form-control space-y-3">
              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="input input-bordered w-full"
                  placeholder="Dhaka, Bangladesh"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  className="input input-bordered w-full"
                  placeholder="+8801700000000"
                  pattern="^\+880[0-9]{9}$"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Password</span>
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

              {/* Submit */}
              <button className="btn btn-primary mt-4 w-full">Register</button>
            </form>

            {/* Divider */}
            <div className="divider">OR</div>

            {/* Google Sign In */}
            <button className="btn btn-outline w-full flex items-center gap-2">
              <FcGoogle size={24} /> Continue with Google
            </button>
          </div>

          {/* Already Account */}
          <p className="text-center pb-5 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
