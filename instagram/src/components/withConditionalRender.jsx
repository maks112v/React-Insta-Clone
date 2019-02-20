import React from 'react'

const withConditionalRender = PostsPage => LoginPage => props => {
  if (localStorage.getItem('user')) {
    return <PostsPage />;
  }
  return <LoginPage />;
}

export default withConditionalRender;