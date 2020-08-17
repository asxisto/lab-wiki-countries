import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';

function CountriesList() {
  return (
    <div className="list-group col-5 country-list">
      {countries.map((country) => (
        <div key={country.cca3}>
          <Link
            to={`/${country.cca3}`}
            className="list-group-item list-group-item-action"
          >
            {country.name.common}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesList;
