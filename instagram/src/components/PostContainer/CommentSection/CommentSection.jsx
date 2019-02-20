import React, { Component } from 'react';
import Comment from './Comment/Comment';

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
      username: "Why",
    }
    this.props.helperFunction(this.state.index,[...this.state.comments,newComment]);
    this.setState({
      comments: [...this.state.comments,newComment],
      commentText: '',
    })
  }

  deleteHandler = () => {
    
  }

  handleChanges = e => {
    this.setState({ commentText: e.target.value });
  };

  render() {
    return(
      <>
      <div className="comments">
        {this.state.comments.map((content, index) => (
          <Comment comment={content} key={index} index={index} deleteHandler={this.deleteHandler} />
        ))} 
        
      </div>
      <form onSubmit={this.addNewComment} className="comment-add">
        <input className="comment-input" value={this.state.commentText} onChange={this.handleChanges} type="text" placeholder="Add a comment..." />
        {/* <button className="comment-submit">Comment</button> */}
      </form>
      </>
    );
  }
}

export default CommentSection;