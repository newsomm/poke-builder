import React, { Component } from 'react'
import Pokecard from './PokeCard'
import '../styles/PokeTeam.css'

class PokeTeam extends Component {
    static defaultProps = {
        teamCount: 6
    }
    render() {
        const { pokeTeam } = this.props
        const team = pokeTeam.map(pokemon => {
            while (pokeTeam.length <= 6) {
                return (
                    <div>
                        <Pokecard
                            capital={pokemon.name}
                            index={pokemon.id}
                        />
                    </div>

                )
            }

        })
        return (
            <div className='fullTeam'>
                <div className='teamContainer'>
                    {}
                    {team}
                </div>
            </div>
        )
    }
}

export default PokeTeam
