import React from "react";
import { useLoaderData } from "react-router";

const TureDetails = () => {
  const data = useLoaderData();

  const {
    departureDate,
    destination,
    image,
    tourName,
    price,
    departureLocation,
    duration,
    userPhoto,
    userName,
    userEmail,
    contact,
    details,
  } = data;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Tour Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        {tourName}
      </h2>

      {/* Image + Info Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tour Image */}
        <div className="w-full">
          <img
            src={image}
            alt={tourName}
            className="w-full h-80 md:h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Tour Information */}
        <div className="space-y-4 bg-white rounded-xl shadow p-6">
          <h3 className="text-2xl font-semibold text-blue-600">Tour Info</h3>
          <p>
            <span className="font-semibold">Duration:</span> {duration}
          </p>
          <p>
            <span className="font-semibold">Departure Location:</span>{" "}
            {departureLocation}
          </p>
          <p>
            <span className="font-semibold">Destination:</span> {destination}
          </p>
          <p>
            <span className="font-semibold">Departure Date:</span>{" "}
            {departureDate}
          </p>
          <p className="text-xl font-bold text-green-600">Price: ${price}</p>
        </div>
      </div>

      {/* Package Details */}
      <div className="mt-10 bg-base-200 p-6 rounded-xl shadow">
        <h3 className="text-2xl font-semibold mb-3">Package Details</h3>
        <p className="text-gray-700 leading-relaxed">{details}</p>
      </div>

      {/* User Info */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-xl shadow">
        <img
          src={userPhoto}
          alt={userName}
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-500"
        />
        <div>
          <h4 className="text-xl font-semibold">{userName}</h4>
          <p className="text-gray-600">{userEmail}</p>
          <p className="text-gray-700">
            <span className="font-semibold">Contact:</span> {contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TureDetails;
