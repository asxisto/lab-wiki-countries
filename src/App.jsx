import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';

import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries} />
          <Route
            path="/:id"
            render={(props) => (
              <CountryDetails {...props} countries={countries} />
            )}
            exact
          />
        </div>
      </div>

      {/* <Switch>
        <Route path="/countries" component={CountriesList} />
        <Route
          path="/:id"
          render={(props) => (
            <CountryDetails {...props} countries={countries} />
          )}
          exact
        />
      </Switch> */}
    </div>
  );
}

export default App;
