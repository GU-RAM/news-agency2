import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <>
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className='btn-wrapper'>
        <Link className='link' to={`/posts/${post.userId}`}>
          Read More
        </Link>
        <Link className='link' to={'/Author'}>
          user/
        </Link>
      </div>
    </>
  );
};

export default Post;
