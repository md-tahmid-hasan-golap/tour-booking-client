import React, { useState } from "react";
import { useLoaderData } from "react-router";
import TureCards from "./TureCards";

const AllPackages = () => {
  const data = useLoaderData();
  const [tures, setTures] = useState(data);
  return (
    <div className="my-10 px-4 md:px-10 lg:px-20">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-800">
        ✈️ Explore Our Amazing Tours
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tures.map((ture) => (
          <TureCards key={ture._id} ture={ture}></TureCards>
        ))}
      </div>
    </div>
  );
};

export default AllPackages;
