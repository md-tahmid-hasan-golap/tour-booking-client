import React, { useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const BookingForm = ({ closeModal }) => {
  const { user } = useContext(AuthContext); // logged-in user
  const [tourName, setTourName] = useState("");
  const [price, setPrice] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [note, setNote] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire("Error!", "You must be logged in to book.", "error");
      return;
    }

    const bookingData = {
      tourName,
      price,
      buyerName,
      note,
      email: user.email, // link booking to logged-in user
    };

    try {
      await axios.post("http://localhost:5000/my-bookings", bookingData);
      Swal.fire("Success!", "Your booking has been submitted!", "success");

      // Reset form
      setTourName("");
      setPrice("");
      setBuyerName("");
      setNote("");

      if (closeModal) closeModal();
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Booking failed. Try again.", "error");
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-md mx-auto my-7">
      <h2 className="text-2xl font-bold mb-4 text-center">Book Tour</h2>
      <form onSubmit={handleBooking} className="space-y-4">
        {/* Tour Name */}
        <div>
          <label className="block font-semibold mb-1">Tour Name</label>
          <input
            type="text"
            value={tourName}
            onChange={(e) => setTourName(e.target.value)}
            placeholder="Enter tour name"
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        {/* Buyer Name */}
        <div>
          <label className="block font-semibold mb-1">Your Name</label>
          <input
            type="text"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>

        {/* Special Note */}
        <div>
          <label className="block font-semibold mb-1">
            Special Note (Optional)
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Any note for guide..."
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
