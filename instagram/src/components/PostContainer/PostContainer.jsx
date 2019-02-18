import React from 'react';
import './PostContainer.css';
import PropType from 'prop-types';

const PostContainer = props => {
  return(
    <div className="card">
      <div className="header" ><img src="" alt=""/><h3></h3></div>
      <div className="image" ><img src="" alt=""/></div>
      <div className="actions"></div>
      <div className="content"></div>
      {/* <CommentsSection /> */}
    </div>
  );
}

PostContainer.propType = {

}

export default PostContainer;