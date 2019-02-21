import React, { Component } from 'react'
import './Posts.css';
import SearchBar from './SearchBar/SearchBar';
import data from './dummy-data';
import Card from './PostContainer/PostContainer';
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 50px;
`;

const ContentBody = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  align-items: flex-start;
`;

const NotFound = styled.h2`
`;

class PostsPage extends Component{
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

  logOut = () =>{
    localStorage.clear();
    this.props.reloadHandler();
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
    const displaySearch = (e.target.value == "") ? false : true;
    this.setState({
      search: e.target.value,
      displayPosts,
      displaySearch
    });
  };

  helperFunction = (index,input) => {
    const newComments = [...this.state.posts];
    newComments[index].comments = input;
    this.setState({
      posts: [...newComments],
    })
    localStorage.setItem('posts', JSON.stringify(newComments));
  }

  render() {
    return (
      <Wrapper>
        <SearchBar searchHandler={this.handleChanges} searchValue={this.state.search} logOutHandler={this.logOut} />
        <ContentBody>
        {
          (this.state.displaySearch && this.state.displayPosts.length === 0 ) ?
           <NotFound>No Posts Found</NotFound>
          :
          ((this.state.displaySearch) ? this.state.displayPosts: this.state.posts).map((content, index) => (
            <Card key={index} index={index} postInfo={content} likePost={() => this.likePost(index)} helperFunction={this.helperFunction} />
          ))
        }
        </ContentBody>
      </Wrapper>
    );
  }
}

export default PostsPage;