import React from 'react';
import { AppContextComponent } from './context/AppContext';
import AllPosts from './containers/AllPosts/AllPosts';
import './App.css';

function App() {
  return (
    <AppContextComponent>
      <div className='App'>
        <AllPosts />
      </div>
      ;
    </AppContextComponent>
  );
}

export default App;
