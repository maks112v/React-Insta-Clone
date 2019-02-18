import React from 'react'
import PropType from 'prop-types';

const CommentSection = props => {
  return(
    <div><b>{ props.comment.username }</b> { props.comment.text }</div>
  );
}

CommentSection.propType = {
  comment: PropType.shape({
    text: PropType.string.isRequired,
    username: PropType.string
  })
}

export default CommentSection;