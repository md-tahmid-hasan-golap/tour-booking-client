import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logged Out Successfully!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-blue-600 text-white btn mr-2" : "btn mr-2"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/allPackages"
        className={({ isActive }) =>
          isActive ? "bg-blue-600 text-white btn mr-2" : "btn mr-2"
        }
      >
        All Packages
      </NavLink>
      <NavLink
        to="/myBookings"
        className={({ isActive }) =>
          isActive ? "bg-blue-600 text-white btn mr-2" : "btn mr-2"
        }
      >
        My Bookings
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "bg-blue-600 text-white btn mr-2" : "btn mr-2"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/addPackage"
        className={({ isActive }) =>
          isActive ? "bg-blue-600 text-white btn mr-2" : "btn mr-2"
        }
      >
        Add Package
      </NavLink>
      <NavLink
        to="/myPackages"
        className={({ isActive }) =>
          isActive ? "bg-blue-600 text-white btn mr-2" : "btn mr-2"
        }
      >
        Manage My Packages
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-2 md:px-6 py-2">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl md:text-2xl font-bold">
          Tour Booking
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
            <img
              className="h-10 w-10 border-2 rounded-full border-green-500"
              src={user.photoURL}
              alt={user.displayName}
              title={user.displayName}
            />
            <span className="hidden sm:inline text-md md:text-lg font-medium">
              {user.displayName}
            </span>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-sm sm:btn-md text-red-600 whitespace-nowrap"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
            <Link to="/register" className="btn btn-outline btn-sm sm:btn-md">
              Register
            </Link>
            <Link to="/login" className="btn btn-outline btn-sm sm:btn-md">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
