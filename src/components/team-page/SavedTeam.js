import React, { Component } from 'react'
import TeamMemberInfo from './TeamMember/TeamMemberInfo'
import { Link } from 'react-router-dom'
import './SavedTeam.css'

class SavedTeam extends Component {
    handleDelete = async () => {
        await this.props.deleteTeam()
        this.forceUpdate()
    }

    handleEdit = () => {
        this.props.editTeam()
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
                    <div className='savedTeamButtons'>
                        <button onClick={this.handleDelete} className='clearTeam deleteButton'>Delete Team</button>
                        <Link to='/builder'>
                            <button onClick={this.handleEdit} className='clearTeam editTeam'>Edit Team</button>
                        </Link>
                    </div>


                    <div className='savedTeamContainer'>
                        {team}
                    </div>
                </div>
            )
        }

    }
}

export default SavedTeam
