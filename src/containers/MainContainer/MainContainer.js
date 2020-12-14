import React from 'react';
import AllPosts from './AllPosts/AllPosts';
import SideBar from './SideBar/SideBar';

const MainContainer = () => {
  return (
    <main>
      <AllPosts />
      <SideBar />
    </main>
  );
};

export default MainContainer;
