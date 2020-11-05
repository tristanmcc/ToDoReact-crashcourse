import React from 'react';
import {Link} from 'react-router-dom';

export default function header() {
    return (
        <header style ={headerStyle}>
            <h1>TODOLIST BRUH</h1>
            <Link style={linkStyle} to="/">HOME</Link> |
            <Link style={linkStyle} to="/about"> ABOUT</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
}
