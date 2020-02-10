import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <div className='navItemContainer'>
                    <div>
                        <img className='mainLogo' src="https://fontmeme.com/permalink/200113/d3dec358ccaaec9783bff84033b9b438.png" alt="pokemon-font" border="0" />
                    </div>
                    <div>
                        <NavLink className='navLinks' to='/builder'>Builder</NavLink>
                        <NavLink className='navLinks' to='/my-team'>Your Team</NavLink>
                        <NavLink className='navLinks' to='/about'>About</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
