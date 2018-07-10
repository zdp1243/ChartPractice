import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">iSubscribe Charts</h1>
        
        </header>
       
        <p className="App-intro">
        The pie chart shows percentage of total subscription useage.  The bar chart shows subscriptions by category.
        </p>

        <div id="chartContainer">Bar chart will load here!</div>

        <div id="piechartContainer">Pie chart will load here!</div>

      </div>
    );
  }
}

export default App;
