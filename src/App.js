import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContextComponent } from './context/AppContext';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <AppContextComponent>
      <Router>
        <div className='App'>
          <Routes />
        </div>
      </Router>
    </AppContextComponent>
  );
}

export default App;
