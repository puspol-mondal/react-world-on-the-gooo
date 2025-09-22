import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  const handelVisitedCountry = (country) => {
    const newvisited = [...visitedCountry, country];
    setVisitedCountry(newvisited);
  };

  return (
    <div className=" w-11/12 mx-auto">
      <h1>Hello world: {countries.length}</h1>
      <h3 className=" text-3xl my-2">
        Visited country count: {visitedCountry.length}
      </h3>
      <ol>
        {visitedCountry.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
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
