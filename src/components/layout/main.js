import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from '../../pages/home.js';
import Kontakt from '../../pages/kontakt.js';
import Streaming from '../../pages/streaming.js';

export default class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/streaming' component={Streaming}/>
        <Route path='/kontakt' component={Kontakt}/>
    </Switch>
    );
  }
}
