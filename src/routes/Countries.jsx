import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const filteredData = countries.filter((country) => {
    const matched =
      !search ||
      country.name.common.toLowerCase().includes(search.toLowerCase());

    const matchedRegion =
      !region || country.region.toLowerCase().includes(region.toLowerCase());

    return matched && matchedRegion;
  });

  const getCountry = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <div className="country-container">
      <h1 className="title">Countries</h1>
      <div className="filter-group">
        <input
          className="input-field"
          value={search}
          type="text"
          placeholder="Search by name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="select-field"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">All Regions</option>
          <option value="africa">Africa</option>
          <option value="americas">Americas</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <ul className="country-list">
        {filteredData.map((country, i) => {
          return (
            <li className="country-item" key={i}>
              <Link
                className="country-link"
                to={`/countries/${country.name.common}`}
              >
                {country.name.common}
              </Link>
              <div className="country-info">
                Region: {country.region} | Population: {country.population}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Countries;
