import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import DummyData from './dummy-data';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
