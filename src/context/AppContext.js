import React, { createContext, useState, useEffect } from 'react';
import { getUsers, getPosts } from '../api/index';
import { createDataFetcher } from '../utilities/helpers';

const AppContext = createContext({
  posts: [],
  users: [],
});

const AppContextComponent = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    createDataFetcher(getPosts, setPosts);
    createDataFetcher(getUsers, setUsers);
    // getPosts().then(data => {
    //   console.log('AppContextComponent -> data', data);
    //   setPosts(data);
    // });
    // getUsers().then(data => {
    //   console.log('AppContextComponent -> data', data);
    //   setUsers(data);
    // });
  }, []);

  return (
    <AppContext.Provider value={{ posts, users }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextComponent };
