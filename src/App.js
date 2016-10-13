import React, { Component } from 'react';
import './App.css';
import NavBar from './components/nav_bar'

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
