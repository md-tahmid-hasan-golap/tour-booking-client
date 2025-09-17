import axios from "axios";
import React from "react";
import { FaEye, FaEdit, FaSyncAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const TureCards = ({ ture, showAction = false }) => {
  const navigate = useNavigate();
  const {
    _id,
    departureDate,
    destination,
    image,
    tourName,
    price,
    departureLocation,
    duration,
    userPhoto,
    userName,
  } = ture;
  const handleTureDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/ture-delete/${_id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition duration-300">
      {/* Tour Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={tourName}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
        <span className="absolute bottom-2 left-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow">
          {duration}
        </span>
      </div>

      {/* Tour Content */}
      <div className="p-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
          {tourName}
        </h2>
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-semibold">From:</span> {departureLocation}
        </p>
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-semibold">To:</span> {destination}
        </p>
        <p className="text-gray-600 text-sm mb-3">
          <span className="font-semibold">Departure:</span> {departureDate}
        </p>
        <p className="text-lg font-semibold text-blue-600 mb-4">${price}</p>

        {/* User Info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={userPhoto}
            alt={userName}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <span className="text-gray-700 text-sm font-medium">{userName}</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <Link
            to={`/ture-details/${_id}`}
            className="flex items-center gap-2 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition text-sm"
          >
            <FaEye /> View Details
          </Link>
          {showAction && (
            <>
              <Link
                to={`/updateTure/${_id}`}
                className="flex items-center gap-2 bg-yellow-500 text-white px-3 py-2 rounded-lg hover:bg-yellow-600 transition text-sm"
              >
                <FaEdit /> Edit
              </Link>
              <button
                onClick={() => handleTureDelete(_id)}
                className="flex items-center gap-2 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition text-sm"
              >
                <FaSyncAlt /> Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TureCards;
