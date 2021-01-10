import React from "react";
import { Switch, Route } from 'react-router-dom';

import styles from './default.scss'

import { HomePage } from 'pages/Homepage'
import { Registration } from 'pages/Registration'
import { MainLayout } from 'layouts/MainLayout'
import { HomepageLayout } from 'layouts/HomepageLayout'

export const App = () => {
  return (
      <Switch>
      <Route exact path="/">
        <HomepageLayout>
          <HomePage />
        </HomepageLayout>
      </Route>
      <Route path="/registration">
        <MainLayout>
          <Registration />
        </MainLayout>
      </Route>
    </Switch>
  );
}

