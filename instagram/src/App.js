import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import data from './dummy-data';
import Card from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: data,
    };
  }
  render() {
    return (
      <div>
        <SearchBar />
        <div className="content-body">
        {this.state.posts.map((content, index) => (
          <Card key={index} postInfo={content} />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
