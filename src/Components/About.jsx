import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-teal-600 text-white py-16 md:py-20 px-4 sm:px-6 text-center my-7 rounded-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          About Our Tour Platform
        </h1>
        <p className="max-w-2xl mx-auto text-base sm:text-lg">
          Welcome to <span className="font-semibold">Ture</span> – a modern tour
          booking platform where travelers can explore exciting destinations,
          and guides can share their unique travel packages. We connect
          adventurers with experiences!
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 my-7 rounded-2xl bg-white dark:bg-gray-800 shadow-md">
        <div className="p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Why Travel With Us?
          </h2>
          <p className="text-sm sm:text-base">
            We believe every journey should be simple and hassle-free. That’s
            why we built a platform where you can discover packages, check
            details, and confirm bookings—all in one place.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-sm sm:text-base">
            <li>Trusted and verified tour guides</li>
            <li>Affordable packages for every traveler</li>
            <li>Easy online booking & secure system</li>
          </ul>
        </div>
        <div className="p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
            Our Goal
          </h2>
          <p className="text-sm sm:text-base">
            Our goal is to make tour booking easier in Bangladesh and beyond. We
            want to give travelers a chance to enjoy safe, memorable, and
            affordable trips while helping guides reach more explorers.
          </p>
        </div>
      </section>

      {/* Meet Our Guides */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-100 dark:bg-gray-800 my-7 rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10">
          Meet Our Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md text-center">
            <img
              src="https://i.ibb.co.com/ymJpsQnf/photo-1506794778202-cad84cf45f1d.jpg"
              alt="Guide"
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg sm:text-xl font-semibold">Rahim Uddin</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Cox’s Bazar Specialist
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md text-center">
            <img
              src="https://i.ibb.co.com/XrsGD95T/photo-1529626455594-4ff0802cfb7e.jpg"
              alt="Guide"
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg sm:text-xl font-semibold">Karima Akter</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Hill Tracts Explorer
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md text-center">
            <img
              src="https://i.ibb.co.com/0jwL6jhC/photo-1595152772835-219674b2a8a6.jpg"
              alt="Guide"
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg sm:text-xl font-semibold">Shuvo Dey</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              Adventure Planner
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
