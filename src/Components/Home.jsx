import React, { useState } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router";
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
      </div>
    </div>
  );
};

export default Home;
