import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = props => (
    <div className='NavBar'>
        <div className='navItemContainer'>
            <div className='DrawerToggle navItem' onClick={props.open}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='navItem'>
                <img className='mainLogo' src="https://fontmeme.com/permalink/200113/d3dec358ccaaec9783bff84033b9b438.png" alt="pokemon-font" border="0" />
            </div>
            <div className='linkContainer'>
                <NavLink className='navLinks' to='/'>Builder</NavLink>
                <NavLink className='navLinks' to='/my-team'>Your Team</NavLink>
            </div>
        </div>
    </div>
)

export default Navbar
