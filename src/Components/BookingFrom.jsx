import React, { useState } from "react";
import Swal from "sweetalert2";

const BookingForm = ({ closeModal }) => {
  const [tourName, setTourName] = useState("");
  const [price, setPrice] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [note, setNote] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    // Normally এখানে backend call যাবে
    // For now, just show SweetAlert2
    Swal.fire({
      icon: "success",
      title: "Booking Submitted!",
      text: `Your booking request has been sent.`,
      confirmButtonColor: "#22c55e",
    });

    // Reset form
    setTourName("");
    setPrice("");
    setBuyerName("");
    setBuyerEmail("");
    setNote("");

    if (closeModal) closeModal();
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md max-w-md mx-auto my-7">
      <h2 className="text-2xl font-bold mb-4 text-center">Book Tour</h2>
      <form onSubmit={handleBooking} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Tour Name</label>
          <input
            type="text"
            value={tourName}
            onChange={(e) => setTourName(e.target.value)}
            placeholder="Enter tour name"
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Your Name</label>
          <input
            type="text"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Your Email</label>
          <input
            type="email"
            value={buyerEmail}
            onChange={(e) => setBuyerEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>

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
