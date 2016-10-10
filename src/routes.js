import React from 'react';
import {Route, IndexRoute} from 'react-router';
import FeaturedBar from './components/featured_bar'
import App from './App.js';
import RunStream from './components/run_stream'
import NewCarousel from "./components/new_carousel_test"


export default (
  <Route path="/" component={App} >
  <IndexRoute component={NewCarousel} />
  <Route path='/runs/:id' component={RunStream}/>
  </Route>
)
