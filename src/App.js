import React from 'react';
import Landing from './Components/Landing'
import { NavBar } from './Components/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar>
        <Landing />
      </NavBar>
    </div>
  );
}

export default App;
