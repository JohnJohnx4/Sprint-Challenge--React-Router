import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navigation/navbar';

import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Navbar />
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
