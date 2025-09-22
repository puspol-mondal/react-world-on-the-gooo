import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  const handelVisitedCountry = (country) => {
    console.log(country);
  };
  return (
    <div className=" w-11/12 mx-auto">
      <h1>Hello world: {countries.length}</h1>
      <div className=" countries ">
        {countries.map((res) => (
          <Country
            key={res.cca3.cca3}
            country={res}
            handelVisitedCountry={handelVisitedCountry}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
