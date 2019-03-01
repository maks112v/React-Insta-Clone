import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import Comments from './CommentSection/CommentSection';
// import Moment from 'react-moment';
import styled from 'styled-components';

const Card = styled.div`
  width: 40%;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #EDF2F9;
  margin-bottom: 20px;
  margin-left: 10px;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin: 10px;
`;

const ProfileImage = styled.img`
  height: 45px;
  border-radius: 100%;
`;

const CardImage = styled.img`
  width: 100%;
`;

const Actions = styled.div`
  padding: 10px 0px;
  display: flex;
  justify-content: space-around;
`;

const Likes = styled.p`
  padding-left: 10px;
`;

const PostContainer = props => {
  return(
    <Card>
      <CardHeader>
        <ProfileImage src={props.postInfo.thumbnailUrl}/>
        <h3>{ props.postInfo.username }</h3>
      </CardHeader>
      <CardImage src={props.postInfo.imageUrl}/>
      <Actions>{(props.postInfo.liked) ? <i className="fas fa-heart post-liked fa-lg" onClick={props.likePost} ></i> : (<i className="far fa-heart fa-lg" onClick={props.likePost} ></i>)}
      <i className="far fa-comment-alt fa-lg cp-10"></i>
      </Actions>
      <Likes>{props.postInfo.likes} likes</Likes>
      <Comments comments={props.postInfo.comments} helperFunction={props.helperFunction} index={props.index} />
      {/* <div className="cp-10"><Moment fromNow >{ props.postInfo.timestamp }</Moment></div> */}
    </Card>
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