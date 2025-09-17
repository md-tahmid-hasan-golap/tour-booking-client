import React, { useState } from "react";
import Banner from "./Banner";
import { Link, useLoaderData } from "react-router";
import TureCards from "./TureCards";

const Home = () => {
  const data = useLoaderData();
  //   console.log(data);
  const [tures, setTures] = useState(data);
  return (
    <div>
      <Banner></Banner>

      <div className="my-10 px-4">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
          Popular Tour Packages
        </h2>

        {/* Tour Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tures.slice(0, 6).map((ture) => (
            <TureCards key={ture._id} ture={ture}></TureCards>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Link
            to="/allPackages" // <-- এখানে তুমি Show All page এর লিংক দিবে
            className="inline-block bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Show All
          </Link>
        </div>
      </div>

      <section className="mt-16 bg-gray-50 p-8 mb-7 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-8">
          Traveler Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example: Tour-related testimonial cards */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "Dhaka to Cox's Bazar tour was amazing! Beautiful beaches and
              friendly guide."
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Traveler"
                className="w-12 h-12 rounded-full"
              />
              <span className="ml-3 font-semibold">Monisha R.</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Dhaka to Cox's Bazar Tour
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "Sundarbans trip was thrilling! Guide knew everything about
              wildlife."
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Traveler"
                className="w-12 h-12 rounded-full"
              />
              <span className="ml-3 font-semibold">Golap S.</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Sundarbans Adventure Tour
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "Chittagong Hill Tracts tour was perfect! Scenery and guide were
              top-notch."
            </p>
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                alt="Traveler"
                className="w-12 h-12 rounded-full"
              />
              <span className="ml-3 font-semibold">Rahim H.</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Chittagong Hill Tracts Tour
            </p>
          </div>
        </div>
      </section>

      <section className="mt-16 p-8 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Tour Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Tour images */}
          <img
            src="https://i.ibb.co.com/DPcT9Hp9/istockphoto-1262285037-612x612.webp"
            alt="Cox's Bazar"
            className="rounded-lg w-full h-48 object-cover"
          />
          <img
            src="https://i.ibb.co.com/JwzYJHkG/gettyimages-114206999-612x612.jpg"
            alt="Sundarbans"
            className="rounded-lg w-full h-48 object-cover"
          />
          <img
            src="https://i.ibb.co.com/bRPLWHnZ/female-spring-organic-women-person.jpg"
            alt="Chittagong"
            className="rounded-lg w-full h-48 object-cover"
          />
          <img
            src="https://i.ibb.co.com/0yD7JPMQ/istockphoto-2223879877-612x612.webp"
            alt="Sylhet"
            className="rounded-lg w-full h-48 object-cover"
          />
          <img
            src="https://i.ibb.co.com/kVZRCQ6S/istockphoto-2186667089-612x612.webp"
            alt="Bandarban"
            className="rounded-lg w-full h-48 object-cover"
          />
          <img
            src="https://i.ibb.co.com/kgqqV6mY/sean-oulashin-KMn4-VEe-EPR8-unsplash.jpg"
            alt="Sajek Valley"
            className="rounded-lg w-full h-48 object-cover"
          />
          <img
            src="https://i.ibb.co.com/XfxKYcj9/istockphoto-1556502444-1024x1024.jpg"
            alt="Saint Martin"
            className="rounded-lg w-full h-48 object-cover"
          />
          <img
            src="https://i.ibb.co.com/mrkVphyY/herd-wild-deer-middle-lake-surrounded-by-greenery.jpg"
            alt="Rangamati"
            className="rounded-lg w-full h-48 object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
