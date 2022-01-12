import React from 'react'
import Registration from './Registration';
import {
    Link
  } from 'react-router-dom';

export default function login() {
    return (
        <div>
        <input type="text" placeholder='username' />
        <input type="password" placeholder='password' />
        <button>Login</button>
        <br />
        <Link to='/Registration' >new user?</Link>
        </div>
    )
}
