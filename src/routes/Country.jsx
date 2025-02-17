import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Country = () => {
  const location = useLocation();
  const [country, setCountry] = useState([]);

  const getSingleCountry = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${
        location.pathname.split("/")[2]
      }?fullText=true`
    );
    const data = await response.json();
    setCountry(data);
  };

  useEffect(() => {
    getSingleCountry();
  }, []);

  const singleCountry = {
    name: country[0]?.name?.common || "N/A",
    officialName: country[0]?.name?.official || "N/A",
    region: country[0]?.region || "N/A",
    subregion: country[0]?.subregion || "N/A",
    capital: country[0]?.capital || "N/A",
    population: country[0]?.population || "N/A",
    flagUrl: country[0]?.flags?.png || "",
  };
  return (
    <div className="single-country-container">
      <div className="text-group">
        <h2 className="country-title">{singleCountry.name}</h2>
        <div className="country-info">
          <p>
            <span>Official Name:</span> {singleCountry.officialName}
          </p>
          <p>
            <span>Capital:</span> {singleCountry.capital}
          </p>
          <p>
            <span>Region:</span> {singleCountry.region}
          </p>
          <p>
            <span>Subregion:</span> {singleCountry.subregion}
          </p>
          <p>
            <span>Population:</span> {singleCountry.population.toLocaleString()}
          </p>
        </div>
      </div>
      {singleCountry.flagUrl && (
        <div className="flag-container">
          <img
            src={singleCountry.flagUrl}
            alt={singleCountry.name}
            className="flag-image"
          />
        </div>
      )}
    </div>
  );
};

export default Country;
