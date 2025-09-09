import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddPackage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddPackage = (e) => {
    e.preventDefault();
    const form = e.target;

    const tourName = form.tourName.value;
    const image = form.image.value;
    const duration = form.duration.value;
    const departureLocation = form.departureLocation.value;
    const destination = form.destination.value;
    const price = form.price.value;
    const departureDate = form.departureDate.value;
    const contact = form.contact.value;
    const details = form.details.value;

    const newPackage = {
      tourName,
      image,
      duration,
      departureLocation,
      destination,
      price,
      departureDate,
      contact,
      details,
    };

    newPackage.userName = user.displayName;
    newPackage.userPhoto = user.photoURL;
    newPackage.userEmail = user.email;
    axios
      .post("http://localhost:5000/tours", newPackage)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Add Tour Successfully!",
            icon: "success",
            draggable: true,
            timer: 1500,
          });
        }
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-4 py-10 md:px-16 lg:px-24">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-3 py-2 mt-4 bg-blue-500 rounded-md hover:bg-blue-600 hover:text-white transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back To Home
      </Link>

      {/* Heading */}
      <div className="p-6 md:p-12 text-center space-y-4">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
          Add Tour Package
        </h1>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          Fill in the details below to add a new tour package. Make your travel
          experience more accessible for explorers!
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleAddPackage} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Tour Name */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Tour Name</label>
            <input
              type="text"
              name="tourName"
              className="input w-full"
              placeholder="Enter Tour Name"
              required
            />
          </fieldset>

          {/* Image URL */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Image URL</label>
            <input
              type="text"
              name="image"
              className="input w-full"
              placeholder="Enter image link"
              required
            />
          </fieldset>

          {/* Duration */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Duration</label>
            <input
              type="text"
              name="duration"
              className="input w-full"
              placeholder="e.g. 5 Days / 4 Nights"
              required
            />
          </fieldset>

          {/* Departure Location */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Departure Location</label>
            <input
              type="text"
              name="departureLocation"
              className="input w-full"
              placeholder="Enter departure location"
              required
            />
          </fieldset>

          {/* Destination */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Destination</label>
            <input
              type="text"
              name="destination"
              className="input w-full"
              placeholder="Enter destination"
              required
            />
          </fieldset>

          {/* Price */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Price</label>
            <input
              type="number"
              name="price"
              className="input w-full"
              placeholder="Enter price in USD"
              required
            />
          </fieldset>

          {/* Departure Date */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Departure Date</label>
            <input
              type="date"
              name="departureDate"
              className="input w-full"
              required
            />
          </fieldset>

          {/* Contact Number */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Contact Number</label>
            <input
              type="tel"
              name="contact"
              className="input w-full"
              placeholder="Enter contact number"
              required
            />
          </fieldset>

          {/* Package Details */}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 md:col-span-2">
            <label className="label">Package Details</label>
            <textarea
              name="details"
              className="textarea w-full"
              placeholder="Write detailed information about the tour package"
              required
            ></textarea>
          </fieldset>
        </div>

        {/* Submit */}
        <input
          type="submit"
          className="btn btn-primary w-full text-sm md:text-base"
          value="Add Package"
        />
      </form>
    </div>
  );
};

export default AddPackage;
