import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav>
        <NavLink 
        to= "/"
        className= "nav-link"
        > Home</NavLink>
        <NavLink to= "/about" className= "nav-link">
            About
        </NavLink>
        <NavLink to= "/login" className= "nav-link">
            Login
        </NavLink>
    </nav>
  )
}
