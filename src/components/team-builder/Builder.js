import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import PokeTeam from './PokeTeam'
import PokeGrid from './PokeGrid'
import '../../styles/Builder.css'

class Builder extends Component {
    state = {
        region: '',
        pokeList: [],
        regionalList: [],
        pokeTeam: [],
        idFound: undefined,
        scrolled: false,
        toSavedTeam: false
    }

    getPokermans = async () => {
        const url = `https://pokeapi.co/api/v2/pokedex/national/`
        const pokemon = await axios.get(url)
        const pokeData = pokemon.data.pokemon_entries
        this.setState({
            pokeList: [...pokeData],
            regionalList: [...pokeData]
        })
    }

    regionPokemon = (region) => {
        let pokeData = this.state.pokeList
        if (region === '1') {
            pokeData = pokeData.slice(0, 151)
        } else if (region === '2') {
            pokeData = pokeData.slice(151, 251)
        } else if (region === '3') {
            pokeData = pokeData.slice(251, 386)
        } else if (region === '4') {
            pokeData = pokeData.slice(386, 494)
        } else if (region === '5') {
            pokeData = pokeData.slice(494, 649)
        } else if (region === '6') {
            pokeData = pokeData.slice(649, 721)
        }
        this.setState({
            regionalList: [...pokeData]
        })
    }


    componentDidMount() {
        this.getPokermans();
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleSave = () => {
        const { pokeTeam } = this.state
        if (pokeTeam.length === 6) {
            this.props.saveTeam(pokeTeam)
            this.setState({
                toSavedTeam: true
            })
        } else {
            alert('Team Must Have 6 Members')
        }
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

    addToTeam = (name, id) => {
        const { pokeTeam, idFound } = this.state
        const pokeData = {
            name: name,
            id: id
        }
        if (pokeTeam.length <= 5) {
            if (pokeTeam.every(pokemon => pokemon.id !== id)) {
                this.setState({
                    idFound: false
                })
                if (idFound === false || idFound === undefined) {
                    this.setState({
                        pokeTeam: [...pokeTeam, pokeData]
                    })
                }
            }
        }
    }

    removeFromTeam = id => {
        this.setState({
            pokeTeam: this.state.pokeTeam.filter(pokemon => pokemon.id !== id)
        })
    }

    clearTeam = () => {
        this.setState({
            pokeTeam: []
        })
    }

    getRegion = (newRegion) => {
        this.setState({
            region: newRegion
        })
    }
    render() {
        if (this.state.toSavedTeam === true) {
            return (
                <Redirect to='/my-team' />
            )
        }
        return (
            <div className='builder' >
                <div className={this.state.scrolled ? 'fullTeamFixed' : 'fullTeam'}>
                    <PokeTeam pokeTeam={this.state.pokeTeam} remove={this.removeFromTeam} scrolled={this.state.scrolled} />
                    <div className='teamButtons'>
                        <button onClick={this.handleSave} className='clearTeam'>Save Team</button>
                        <button onClick={this.clearTeam} className='clearTeam'>Clear Team</button>
                    </div>
                </div>
                <PokeGrid scrolled={this.state.scrolled ? 'gridComponentFixed' : 'gridComponent'} addToTeam={this.addToTeam} pokeGrid={this.state.regionalList} getRegion={this.getRegion} regionPokemon={this.regionPokemon} />
            </div>
        )
    }
}

export default Builder
