import React from 'react'
import uuid from 'uuid'
import './PokeTeam.css'
import TeamMember from './TeamMember/TeamMember'

const PokeTeam = ({ remove, scrolled, pokeTeam }) => {
    const team = pokeTeam.map(pokemon => {
        return (
            <div onClick={() => remove(pokemon.id)} key={uuid()}>
                <TeamMember
                    capital={pokemon.name}
                    index={pokemon.id}
                />
            </div>
        )
    })
    return (
        <div>
            {scrolled ? (
                <div>
                    <div>
                        <img className='logo' src='http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png' alt='logo' />
                    </div>
                    <img className='yourName' src="https://fontmeme.com/permalink/200108/60c1cef1d3f473f5084fe2ad56548168.png" alt="pokemon-font" border="0" />
                </div>
            ) : null}
            <div className='teamContainer' >
                {team}
            </div>
        </ div >
    )
}

export default PokeTeam
