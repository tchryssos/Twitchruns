import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav_bar'
import RunNail from './components/run_nail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <h2>Is this goan work?</h2>

        <div>
          <RunNail />
        </div>
        
      </div>
    );
  }
}

export default App;
