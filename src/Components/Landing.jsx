import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from '../Pages/Home/Homepage'

export default function Landing() {
    return (
        <div className="Landing">
            <Switch>
                <Route to='/' component={HomePage} />
            </Switch>
        </div>
    );
}


