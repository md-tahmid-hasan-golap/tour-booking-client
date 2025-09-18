import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const BookingForm = ({ closeModal }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { tourName, price } = location.state || {};

  const [buyerName, setBuyerName] = useState(user?.displayName || "");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (user?.displayName) setBuyerName(user.displayName);
  }, [user]);

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Not Logged In",
        text: "Please log in before booking a tour!",
      });
      return;
    }

    const bookingData = {
      tourName,
      price,
      userName: user.displayName,
      email: user.email,
      note,
      tourId: Date.now().toString(),
    };

    try {
      const res = await fetch(
        "https://server-side-kappa-jet.vercel.app/my-bookings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(bookingData),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Booking Submitted!",
          text: "Your booking request has been stored.",
          confirmButtonColor: "#22c55e",
        });
        setNote("");
        if (closeModal) closeModal();
      } else {
        Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text: data.message || "Something went wrong.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not submit booking. Try again later.",
      });
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md w-full max-w-lg mx-auto my-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
        Book Tour
      </h2>
      <form onSubmit={handleBooking} className="space-y-4">
        {/* Tour Name */}
        <div>
          <label className="block font-semibold mb-1 text-sm sm:text-base">
            Tour Name
          </label>
          <input
            type="text"
            value={tourName || ""}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-200 text-sm sm:text-base"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block font-semibold mb-1 text-sm sm:text-base">
            Price
          </label>
          <input
            type="number"
            value={price || ""}
            readOnly
            className="w-full border px-3 py-2 rounded bg-gray-200 text-sm sm:text-base"
          />
        </div>

        {/* Special Note */}
        <div>
          <label className="block font-semibold mb-1 text-sm sm:text-base">
            Special Note
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm sm:text-base min-h-[100px]"
            placeholder="Write any special request..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-sm sm:text-base"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
