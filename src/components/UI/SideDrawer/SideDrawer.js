import React from 'react'
import Background from '../Background/Background'
import { NavLink } from 'react-router-dom'
import './SideDrawer.css'


const SideDrawer = props => {
    let attachedClasses = ['SideDrawer', 'Close']
    if (props.open === true) {
        attachedClasses = ['SideDrawer', 'Open']
    }
    return (
        <div>
            <div className={attachedClasses.join(' ')}>
                <div>
                    <img className='mainLogo drawerLogo' src="https://fontmeme.com/permalink/200113/d3dec358ccaaec9783bff84033b9b438.png" alt="pokemon-font" border="0" />
                </div>
                <nav>
                    <NavLink className='navLinks' to='/'>Builder</NavLink>
                    <NavLink className='navLinks' to='/my-team'>Your Team</NavLink>
                </nav>
            </div>
            {props.open ? <Background cancel={props.close} /> : null}
        </div>

    )

}

export default SideDrawer
