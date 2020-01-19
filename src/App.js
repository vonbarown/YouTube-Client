import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import HomPage from './Pages/Home/Hompage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to='/' component={HomPage} />
      </Switch>
    </div>
  );
}

export default App;
