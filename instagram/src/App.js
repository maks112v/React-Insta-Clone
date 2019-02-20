import React, { Component } from 'react';
import withConditionalRender from './components/withConditionalRender';
import PostsPage from './components/PostsPage';
import LoginPage from './components/LoginPage';
import './App.css';

const ToShow = withConditionalRender(PostsPage)(LoginPage);

class App extends Component {

  render() {
    return (
      <ToShow />
    );
  }
}

export default App;
