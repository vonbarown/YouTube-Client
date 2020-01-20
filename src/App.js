import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './Pages/Home/Homepage'
// import { NavBar } from './Components/NavBar'
import './App.css';
import { NavBar } from './Components/NavBar';
import VideoPage from './Pages/VideoPage/VideoPage'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path='/video/:id' component={VideoPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App