import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav_bar'
import RunStream from './components/run_stream'
import NewCarousel from './components/new_carousel_test'
import {Link} from 'react-router'

class App extends Component {


  render() {
    return (
      <div className="App">
        <NavBar/>
        <div>
        {this.props.children}
        </div>
      </div>


    );
  }
}

export default App;
