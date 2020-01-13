import React, { Component } from 'react'
import uuid from 'uuid'
import '../../styles/PokeTeam.css'
import TeamMember from './TeamMember'


class PokeTeam extends Component {
    static defaultProps = {
        position: 'fixed',
        top: 0
    }
    state = {
        scrolled: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if (window.scrollY !== 0) {
            this.setState({
                scrolled: true
            })
        } else {
            this.setState({
                scrolled: false
            })
        }
    }
    handleRemove = (id) => {
        this.props.remove(id)
    }

    handleClear = () => {
        this.props.clearTeam()
    }

    render() {
        const { pokeTeam, position, top, bottom } = this.props
        const team = pokeTeam.map(pokemon => {
            return (
                <div onClick={() => this.handleRemove(pokemon.id)} key={uuid()}>
                    <TeamMember
                        capital={pokemon.name}
                        index={pokemon.id}
                    />
                </div>

            )
        })
        return (
            <div className='fullTeam' style={this.state.scrolled ? { position: `${position}`, top: `${top}` } : { display: 'block' }}>
                <div>
                    <img className='logo' src='http://pluspng.com/img-png/pokemon-logo-png-pokemon-logo-png-2000.png' alt='logo' />
                </div>
                <img className='yourName' src="https://fontmeme.com/permalink/200108/60c1cef1d3f473f5084fe2ad56548168.png" alt="pokemon-font" border="0" />
                <div className='teamContainer'>
                    {team}
                </div>
                <button onClick={this.handleClear} className='clearTeam'>Clear Team</button>
            </ div>
        )
    }
}

export default PokeTeam
