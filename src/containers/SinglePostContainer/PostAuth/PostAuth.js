import React from 'react';

const PostAuth = ({ users, userId }) => {
  console.log('PostAuth -> users', users);
  console.log('PostAuth -> userId', userId);
  return (
    <>
      {users
        .filter(users => users.id === userId)
        .map(user => {
          return <span key={user.id}>{user.name}</span>;
        })}
    </>
  );
};

export default PostAuth;
