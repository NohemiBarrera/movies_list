import React, {Fragment} from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route 
            exact
            path='/'
            component={MoviesList}
          />
          <Route
            exact
            path='/:id'
            component={MovieDetail}
          />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
