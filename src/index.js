import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './pages/layout.js';
import Home from './pages/home.js';
import Kontakt from './pages/kontakt.js';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="kontakt" name="kontakt" component={Kontakt}></Route>
    </Route>
  </Router>,
app);
