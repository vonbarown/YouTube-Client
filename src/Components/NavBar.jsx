import React from 'react'
// import { Link, Switch, Route } from 'react-router-dom';
export const NavBar = (props) => {

    return (
        <div>
            <h3>YouTube</h3>
            <a href="/">Home</a> {'  '}
            <a href="/about">About</a>
            {props.children}
        </div>
    )
}