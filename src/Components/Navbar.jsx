import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";
import logo from "../assets/img/4136591.jpg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successful!",
          icon: "success",
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-blue-600 text-white btn" : "btn"
          }
          onClick={() => setIsDropdownOpen(false)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allPackages"
          className={({ isActive }) =>
            isActive ? "bg-blue-600 text-white btn" : "btn"
          }
          onClick={() => setIsDropdownOpen(false)}
        >
          All Packages
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "bg-blue-600 text-white btn" : "btn"
          }
          onClick={() => setIsDropdownOpen(false)}
        >
          About Us
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/myBookings"
              className={({ isActive }) =>
                isActive ? "bg-blue-600 text-white btn" : "btn"
              }
              onClick={() => setIsDropdownOpen(false)}
            >
              My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addPackage"
              className={({ isActive }) =>
                isActive ? "bg-blue-600 text-white btn" : "btn"
              }
              onClick={() => setIsDropdownOpen(false)}
            >
              Add Package
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myPackages"
              className={({ isActive }) =>
                isActive ? "bg-blue-600 text-white btn" : "btn"
              }
              onClick={() => setIsDropdownOpen(false)}
            >
              Manage My Packages
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-2 md:px-6 py-2">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-10 hidden md:flex" />

          {/* Mobile Dropdown */}
          <div className="relative lg:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="btn btn-ghost"
            >
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="menu menu-compact absolute top-full left-0 mt-2 w-52 p-2 shadow bg-base-100 rounded-box z-50">
                {links}
              </ul>
            )}
          </div>

          <Link className="btn btn-ghost text-xl font-bold">Tour Booking</Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-3">
          {/* Theme Toggle */}
          <label className="swap swap-rotate mr-3">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
            <svg
              className="swap-on fill-current w-7 h-7 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64 13.65a1 1 0 00-1.11-.27 8 8 0 01-10.31-10.31 1 1 0 00-.27-1.11A1 1 0 008.5 2 10 10 0 1019.5 13.5a1 1 0 00.27-1.11z" />
            </svg>
            <svg
              className="swap-off fill-current w-7 h-7 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 4.354a1 1 0 011 1V7a1 1 0 01-2 0V5.354a1 1 0 011-1zm0 12.292a1 1 0 011 1V19a1 1 0 01-2 0v-1.354a1 1 0 011-1zM4.354 12a1 1 0 011-1H7a1 1 0 010 2H5.354a1 1 0 01-1-1zm12.292 0a1 1 0 011-1H19a1 1 0 010 2h-1.354a1 1 0 01-1-1z" />
            </svg>
          </label>

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
    </div>
  );
};

export default Navbar;
