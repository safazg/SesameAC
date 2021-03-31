import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import PartnersPage from "views/PartnersPage/PartnersPage";
import FAQ from "views/FAQ/FAQ";
import InfoPage from "views/InfoPage/InfoPage";
import reducer from "./reducer/reducer";
import {createStore} from 'redux';

//reducer
import { Provider } from 'react-redux';


var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={createStore(reducer)}>
  <Router history={hist}>
    <Switch>
      <Route path="/partners-page" component={PartnersPage} />
      <Route path="/faq" component={FAQ} />
      <Route path="/info-page" component={InfoPage} />
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>
  </Provider>,
  document.getElementById("root")
);
