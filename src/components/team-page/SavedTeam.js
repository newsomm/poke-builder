import React, { Component } from 'react'
import TeamMemberInfo from './TeamMemberInfo'
import '../../styles/SavedTeam.css'


class SavedTeam extends Component {


    render() {
        const savedTeam = JSON.parse(window.localStorage.getItem('savedTeam'))
        console.log(savedTeam)
        const team = savedTeam.map(member => (
            <TeamMemberInfo id={member.id} name={member.name} key={member.id} />
        ))

        return (
            <div className='SavedTeam'>
                <button className='clearTeam'>Delete Team</button>
                <div className='savedTeamContainer'>
                    {team}
                </div>
            </div>
        )
    }
}

export default SavedTeam
