import React, { Component } from 'react';
import Comment from './Comment/Comment';
import styled from 'styled-components';

const Comments = styled.div`
  padding: 0 10px 10px 10px;
`;

const NewComment = styled.input`
  border-radius: 5px;
  border: 1px solid #EDF2F9;
  height: 30px;
  font-size: 15px;
  text-align: center;
  position: relative;
  width: 100%;

  &:focus{
    outline: none;
    border-color: #2C7BE5;
  }
`;

class CommentSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments : props.comments,
      index: props.index,
      commentText: '',
    }
  }

  addNewComment = e =>{
    e.preventDefault();
    const newComment = {
      text: this.state.commentText,
      username: localStorage.getItem('username'),
    }
    this.props.helperFunction(this.state.index,[...this.state.comments,newComment]);
    this.setState({
      comments: [...this.state.comments,newComment],
      commentText: '',
    })
  }

  deleteHandler = (index) => {
    if(this.state.comments[index].username === localStorage.getItem('username')){
      const newComments = [...this.state.comments];
      newComments.splice(index, 1);
      this.props.helperFunction(this.state.index,newComments);
      this.setState({
        comments: newComments,
        commentText: '',
      })
    }
    else {
      console.error('Not Your Post');
    }
  }

  handleChanges = e => {
    this.setState({ commentText: e.target.value });
  };

  render() {
    return(
      <>
      <Comments>
        {this.state.comments.map((content, index) => (
          <Comment comment={content} key={index} index={index} deleteHandler={this.deleteHandler} />
        ))} 
        
      </Comments>
      <form onSubmit={this.addNewComment} className="comment-add">
        <NewComment className="comment-input" required="required" value={this.state.commentText} onChange={this.handleChanges} type="text" placeholder="Add a comment..." />
        {/* <button className="comment-submit">Comment</button> */}
      </form>
      </>
    );
  }
}

export default CommentSection;