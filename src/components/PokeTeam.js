import React, { Component } from 'react'
import Pokecard from './PokeCard'
import uuid from 'uuid'
import '../styles/PokeTeam.css'

class PokeTeam extends Component {
    state = {}
    handleRemove = (id) => {
        this.props.remove(id)
    }
    render() {
        const { pokeTeam } = this.props
        const team = pokeTeam.map(pokemon => {
            return (
                <div onClick={() => this.handleRemove(pokemon.id)} key={uuid()}>
                    <Pokecard
                        capital={pokemon.name}
                        index={pokemon.id}
                    />
                </div>

            )
        })
        return (
            <div className='fullTeam'>
                <div className='teamContainer'>
                    {team}
                </div>
            </div>
        )
    }
}

export default PokeTeam
