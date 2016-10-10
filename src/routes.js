import React from 'react';
import {Route, IndexRoute} from 'react-router';
import FeaturedBar from './components/featured_bar'
import App from './App.js';
import RunStream from './components/run_stream'


export default (
  <Route path="/" component={App} >
  <IndexRoute component={FeaturedBar} />
  <Route path='/runs/:id' component={RunStream}/>
  </Route>
)
