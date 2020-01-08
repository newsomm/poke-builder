import React, { Component } from 'react'
import Pokecard from './PokeCard'
import uuid from 'uuid'
import '../styles/PokeTeam.css'

class PokeTeam extends Component {
    state = {

    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll = () => {

    }
    handleRemove = (id) => {
        this.props.remove(id)
    }
    handleClear = () => {
        this.props.clearTeam()
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
                <div>
                    <img className='logo' src='http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png' alt='logo' />
                </div>
                <img src="https://fontmeme.com/permalink/200108/60c1cef1d3f473f5084fe2ad56548168.png" alt="pokemon-font" border="0" />
                <div className='teamContainer'>
                    {team}
                </div>
                <button onClick={this.handleClear} className='clearTeam'>Clear Team</button>
            </div>
        )
    }
}

export default PokeTeam
