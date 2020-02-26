import React, { memo, useState } from 'react'
import TeamMemberInfo from './TeamMember/TeamMemberInfo'
import { Link, Redirect } from 'react-router-dom'
import './SavedTeam.css'

const SavedTeam = ({ deleteTeam, editTeam }) => {
    const [redirect, setRedirect] = useState(false)
    const handleDelete = () => {
        deleteTeam()
        setRedirect(true)
        if (redirect) {
            return <Redirect to='/' />
        }
    }
    if (localStorage.getItem("savedTeam") === null) {
        return (
            <div className='noTeam'>
                <h1 >You don't have a saved team. Go and make one!</h1>
                <Link to='/'>
                    <button className='clearTeam'>Make Team</button>
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
                <div className='savedTeamButtons'>
                    <button onClick={handleDelete} className='clearTeam deleteButton'>Delete Team</button>
                    <Link to='/'>
                        <button onClick={editTeam} className='clearTeam editTeam'>Edit Team</button>
                    </Link>
                </div>
                <div className='savedTeamContainer'>
                    {team}
                </div>
            </div>
        )
    }
}

export default memo(SavedTeam)


