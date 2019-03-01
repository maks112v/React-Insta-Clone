import React from 'react'
import PropTypes from 'prop-types';

const Comment = (props) => {
  return(
    <div onClick={() => props.deleteHandler(props.index)} className={(localStorage.getItem('username') === props.comment.username) ? "hover-delete": null} ><b>{ props.comment.username }</b> { props.comment.text }</div>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
  })
};

export default Comment;