import React from 'react'
import Dashboard from '../Dashboard'
import Login from '../Login'
import Settings from '../Settings'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <NavLink to='/'>Login</NavLink> | 
            <NavLink to='/dashboard'>Dashboard</NavLink> | 
            <NavLink to='/settings'>Settings</NavLink>

        </>
    )
}

export default NavBar