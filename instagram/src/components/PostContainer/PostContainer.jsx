import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import CommentsSection from './CommentSection/CommentSection';
import Moment from 'react-moment';

const PostContainer = props => {
  return(
    <div className="card">
      <div className="card-header" ><img src={props.postInfo.thumbnailUrl}  className="user-img" alt=""/><h3>{ props.postInfo.username }</h3></div>
      <div className="image" ><img src={props.postInfo.imageUrl} className="body-img" alt=""/></div>
      <div className="actions cp-10"><i className="far fa-heart fa-lg"></i><i className="far fa-comment-alt fa-lg cp-10"></i> <p>{props.postInfo.likes} likes</p></div>
      <div className="comments">
        {props.postInfo.comments.map((content, index) => (
          <CommentsSection comment={content} key={index} />
        ))}
      </div>
      <div className="cp-10"><Moment fromNow >{ props.postInfo.timestamp }</Moment></div>
      <input className="comment-input" type="text" placeholder="Add a comment..." />
    </div>
  );
}

PostContainer.propTypes = {
  postInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
  })
};

export default PostContainer;