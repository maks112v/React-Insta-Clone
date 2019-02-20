import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import data from './dummy-data';
import Card from './components/PostContainer/PostContainer';

class App extends Component {
  state = {
    posts: [],
    search:'',
    displayPosts: [],
    displaySearch: false,
  };

  componentDidMount() {
    if(localStorage.getItem('posts') !== null ){
      this.setState({
        posts: JSON.parse(localStorage.getItem('posts')),
      })
    }
    else{
      this.setState({
        posts: data,
      })
    }
  }

  likePost = index => {
    const newPosts = [...this.state.posts];
    if(newPosts[index].liked){
      newPosts[index].likes--;
      newPosts[index].liked = false;
    }
    else {
      newPosts[index].likes++;
      newPosts[index].liked = true;
    }
    this.setState({
      posts: newPosts,
    })
    localStorage.setItem('posts', JSON.stringify(newPosts));
  }

  handleChanges = e => {
    const displayPosts = [...this.state.posts].filter( current => current.username.toLowerCase().includes(e.target.value.toLowerCase()));
    const displaySearch = (e.target.value == null) ? false : true;
    this.setState({
      search: e.target.value,
      displayPosts,
      displaySearch
    });
  };

  helperFunction = (index,input) => {
    const newComments = [...this.state.posts];
    newComments[index].comments = input;
    console.log(newComments);
    this.setState({
      posts: [...newComments],
    })
    localStorage.setItem('posts', JSON.stringify(newComments));
  }

  render() {
    return (
      <div>
        <SearchBar searchHandler={this.handleChanges} searchValue={this.state.search} />
        <div className="content-body">
        {((this.state.displaySearch) ? this.state.displayPosts: this.state.posts).map((content, index) => (
          <Card key={index} index={index} postInfo={content} likePost={() => this.likePost(index)} helperFunction={this.helperFunction} />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
