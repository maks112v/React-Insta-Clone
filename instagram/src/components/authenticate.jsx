import React from 'react'

const authenticate = PostsPage => LoginPage => props => {
  if (localStorage.getItem('user')) {
    return <PostsPage reloadHandler={props.update} />;
  }
  return <LoginPage reloadHandler={props.update} />;
}

export default authenticate;