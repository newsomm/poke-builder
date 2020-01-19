import React, { Component } from 'react'
import TeamMemberInfo from './TeamMemberInfo'
import { Link } from 'react-router-dom'
import '../../styles/SavedTeam.css'

//TODO      Figure out how to rerender on click for 'clear team'
//TODO      Work out the move picking functionality?
//TODO      Make the 'make a team button' route to the builder page 
//TODO       

class SavedTeam extends Component {
    handleDelete = () => {
        this.props.deleteTeam()
    }

    render() {
        if (localStorage.getItem("savedTeam") === null) {
            return (
                <div>
                    <h1>You have no saved teams. Go and make one!</h1>
                    <Link to='/builder'>
                        <button>Make Team</button>
                    </Link>
                </div>
            )
        } else {
            const savedTeam = JSON.parse(window.localStorage.getItem('savedTeam'))
            const team = savedTeam.map(member => (
                <TeamMemberInfo id={member.id} name={member.name} key={member.id} />
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
