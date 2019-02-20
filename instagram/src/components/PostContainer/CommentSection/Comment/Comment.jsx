import React from 'react'
import PropTypes from 'prop-types';

const Comment = (props) => {
  return(
    <div onClick={() => props.deleteHandler(props.index)} className="hover-delete"><b>{ props.comment.username }</b> { props.comment.text }</div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  })
};

export default Comment;