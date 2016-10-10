import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav_bar'
import RunStream from './components/run_stream'
import NewCarousel from './components/new_carousel_test'
// import FeaturedBar from './components/featured_bar'

class App extends Component {
 

  render() {
    return (
      <div className="App">
        < NavBar/>
        < NewCarousel />
        <div>
        {this.props.children}
        </div>
      </div>


    );
  }
}

export default App;
