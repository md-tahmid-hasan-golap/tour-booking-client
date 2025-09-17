import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchBookings = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/my-bookings/${user.email}`
        );
        const data = await res.json();
        setBookings(data);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user]);

  if (!user?.email) {
    return (
      <p className="text-center mt-6">Please log in to see your bookings.</p>
    );
  }

  if (loading) {
    return <p className="text-center mt-6">Loading your bookings...</p>;
  }

  return (
    <div className="max-w-5xl mx-auto my-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-center text-gray-600">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left">Tour Name</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Booked By</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Note</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-t border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="px-4 py-2">{booking.tourName}</td>
                  <td className="px-4 py-2">${booking.price}</td>
                  <td className="px-4 py-2">{booking.userName}</td>
                  <td className="px-4 py-2">{booking.email}</td>
                  <td className="px-4 py-2 italic">
                    {booking.note ? booking.note : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
