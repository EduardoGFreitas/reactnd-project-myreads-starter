import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home';
import Search from './pages/Search';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
