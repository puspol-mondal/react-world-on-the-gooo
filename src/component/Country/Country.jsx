import React, { useState } from "react";

const Country = ({ country, handelVisitedCountry, handelVisitedFlag }) => {
  // console.log(country.area.area);
  const [visited, setVisited] = useState(false);

  const handelVisited = () => {
    setVisited(!visited);
    handelVisitedCountry(country);
  };
  return (
    <div
      className={` ${
        visited && "bg-gray-300"
      } border-2 flex flex-col justify-center p-2 rounded-2xl `}
    >
      <img
        className=" w-full h-50 "
        src={country?.flags?.flags?.png}
        alt={country.flags.flags.alt}
      />
      <h2 className=" ">
        <b>Name:</b> {country.name.common}{" "}
      </h2>
      <h2 className=" ">
        <b>Population:</b> {country.population.population}{" "}
      </h2>
      <h2 className=" ">
        <b>Area:</b> {country.area.area}
        {country.area.area > 300000 ? (
          <b> Big Country</b>
        ) : (
          <b> Small Country</b>
        )}
      </h2>
      <button onClick={handelVisited}>
        {visited ? "visited" : "Not Visited"}
      </button>
      <button
        className=" my-3"
        onClick={() => {
          handelVisitedFlag(country?.flags?.flags?.png);
        }}
      >
        {" "}
        Add to Flag
      </button>
    </div>
  );
};

export default Country;
