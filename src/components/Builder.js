import React, { Component } from 'react'
import axios from 'axios'
import PokeTeam from './PokeTeam'
import PokeGrid from './PokeGrid'

//*  FINISHED: Make sure you cannot add the same pokemon to the team more than once 

//TODO   Ability to search specific pokemon

//*  FINISHED: Find way to display types (Maybe new API?)

//TODO   Add Navbar to edit team eventually

//TODO   Team can choose moves and items and shit 

class Builder extends Component {
    state = {
        region: '',
        pokeList: [],
        regionalList: [],
        pokeTeam: [],
        idFound: undefined
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
        return (
            <div className='builder'>
                <PokeTeam pokeTeam={this.state.pokeTeam} remove={this.removeFromTeam} clearTeam={this.clearTeam} />
                <PokeGrid addToTeam={this.addToTeam} pokeGrid={this.state.regionalList} getRegion={this.getRegion} regionPokemon={this.regionPokemon} />
            </div>
        )
    }
}

export default Builder
