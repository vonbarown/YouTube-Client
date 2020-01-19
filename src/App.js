import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/Home/Homepage'
import { VideoPage } from './Pages/VideoPage/VideoPage'
// import { NavBar } from './Components/NavBar'
import './App.css';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App