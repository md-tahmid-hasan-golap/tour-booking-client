import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import TureCards from "./TureCards";

const MyPackages = () => {
  const { user } = useContext(AuthContext);
  const [tures, setTures] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myAdded-ture/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTures(data);
      });
  }, [user?.email]);
  return (
    <div className="my-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        My Added Packages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tures.map((ture) => (
          <TureCards
            key={ture._id}
            ture={ture}
            showAction={true}
            showActions={true}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPackages;
