import React from 'react';
import {Route} from 'react-router';

import App from './App.js';
import RunStream from './components/run_stream'

export default (
  <Route path="/" component={App} >
  <Route path='/stream' component={RunStream}/>
  <Route path='runs/:id' component={RunStream}/>
  </Route>
)
