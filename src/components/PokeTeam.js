import React, { Component } from 'react'
import Pokecard from './PokeCard'
import '../styles/PokeTeam.css'

class PokeTeam extends Component {
    state = {
        team: []
    }
    render() {
        return (
            <div className='fullTeam'>
                <div className='pokeTeam'>

                </div>
                <div className='pokeTeam'>

                </div>
                <div className='pokeTeam'>

                </div>
                <div className='pokeTeam'>

                </div>
                <div className='pokeTeam'>

                </div>
                <div className='pokeTeam'>

                </div>
            </div>
        )
    }
}

export default PokeTeam
