import React, { Component } from 'react';
import countries from './../countries.json';
import { Link } from 'react-router-dom';

class CountryDetails extends Component {
  constructor() {
    super();
    this.state = {
      country: null,
    };
  }

  componentDidMount(props) {
    this.loadCountry();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadCountry();
    }
  }

  loadCountry = () => {
    const id = this.props.match.params.id;
    const country = countries.find((item) => item.cca3 === id);
    // console.log(id);
    this.setState({
      country,
    });
  };

  render() {
    const country = this.state.country;
    return (
      <div className="col-7">
        {this.state.country && (
          <div>
            <h1>{country.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td>Capital</td>
                  <td>{country.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {country.area} km<sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul className="list-group-flush">
                      {country.borders.map((borderCountry) => (
                        <li className="list-group-item">
                          <Link key={borderCountry} to={`/${borderCountry}`}>
                            {borderCountry}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default CountryDetails;
