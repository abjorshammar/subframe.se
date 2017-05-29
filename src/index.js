import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom'

import Layout from './pages/layout.js';

const app = document.getElementById('root');

ReactDOM.render((
  <HashRouter>
    <Layout />
  </HashRouter>
),
app);
