import React, { Component } from 'react';
import authenticate from './components/authenticate';
import PostsPage from './components/PostsPage';
import LoginPage from './components/LoginPage';
import './App.css';

const ToShow = authenticate(PostsPage)(LoginPage);

class App extends Component {

  reloadHandler = () => {
    this.forceUpdate();
  }

  render() {
    return (
      <ToShow update={this.reloadHandler} />
    );
  }
}

export default App;
