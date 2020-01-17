import React, { Component } from 'react'


class SavedTeam extends Component {
    render() {
        const team = this.props.team.map(member => (
            <h1 key={member.id}>{member.name}</h1>
        ))

        return (
            <div className='SavedTeam'>
                <h1>Saved Team</h1>
                {team}
            </div>
        )
    }
}

export default SavedTeam
