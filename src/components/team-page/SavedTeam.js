import React, { Component } from 'react'
import TeamMemberInfo from './TeamMemberInfo'
import { Link } from 'react-router-dom'
import '../../styles/SavedTeam.css'

//* DONE      Figure out how to rerender on click for 'clear team'
//*DONE     Make the 'make a team button' route to the builder page (FIXED BY 'forceUpdate()')

class SavedTeam extends Component {
    handleDelete = async () => {
        await this.props.deleteTeam()
        this.forceUpdate()
    }

    render() {
        if (localStorage.getItem("savedTeam") === null) {
            return (
                <div className='noTeam'>
                    <h1 >You have no saved teams. Go and make one!</h1>
                    <Link to='/builder'>
                        <button className='clearTeam'>Make Team</button>
                    </Link>
                </div>
            )
        } else {
            const savedTeam = JSON.parse(window.localStorage.getItem('savedTeam'))
            const team = savedTeam.map(member => (
                <TeamMemberInfo id={member.id} name={member.name} key={member.id} getMoves={this.props.getMoves} />
            ))
            return (
                <div className='SavedTeam'>
                    <button onClick={this.handleDelete} className='clearTeam'>Delete Team</button>
                    <div className='savedTeamContainer'>
                        {team}
                    </div>
                </div>
            )
        }

    }
}

export default SavedTeam
