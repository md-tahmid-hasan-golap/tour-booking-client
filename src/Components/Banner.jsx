import { Link } from "react-router";
import { motion } from "framer-motion";
import bannerImage from "../assets/img/tom-barrett-M0AWNxnLaMw-unsplash.jpg";

const Banner = () => {
  return (
    <div className="bg-base-200 w-full my-7 rounded-lg">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-4 py-8 sm:py-12 gap-6 sm:gap-8">
        {/* Hero Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: 1,
              y: 0,
              color: ["#2563eb", "#16a34a", "#db2777", "#ca8a04", "#2563eb"],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            Explore Beautiful Tours!
          </motion.h1>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Discover amazing destinations, enjoy unique experiences, and make
            your trips unforgettable. Start your journey with us today!
          </p>

          <Link
            to="/allPackages"
            className="btn btn-primary text-white px-4 py-2 sm:px-6 sm:py-3"
          >
            Explore All Packages
          </Link>
        </div>

        {/* Banner Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <motion.img
            src={bannerImage}
            alt="Tour Banner"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full rounded-lg shadow-2xl"
            style={{ maxHeight: "400px", objectFit: "cover" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
