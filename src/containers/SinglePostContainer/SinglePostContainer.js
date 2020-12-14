import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import PostAuth from './PostAuth/PostAuth';

const SinglePostContainer = () => {
  const { posts, users } = useContext(AppContext);
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState();
  console.log(useParams());

  useEffect(() => {
    setSinglePost(posts.find(post => post.userId === +id));
  });

  return (
    <div>
      <h1>{singlePost && singlePost.title}</h1>
      <p>{singlePost && singlePost.body}</p>
      <p>
        {singlePost && <PostAuth users={users} userId={singlePost.userId} />}
      </p>
    </div>
  );
};

export default SinglePostContainer;
