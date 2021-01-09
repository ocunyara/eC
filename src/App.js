import React from "react";
import { Switch, Route } from 'react-router-dom';

import './default.scss'

import { HomePage } from './pages/Homepage'
// import { Registration } from './pages/Registration'

export const App = () => {
  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/registration">
      {/*//  <Registration />*/}
      </Route>
    </Switch>
  );
}

