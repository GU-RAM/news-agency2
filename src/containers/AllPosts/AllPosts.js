import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

function Allposts() {
  const { posts, users } = useContext(AppContext);
  console.log('Allposts -> posts', posts);
  return <div>guro</div>;
}

export default Allposts;
