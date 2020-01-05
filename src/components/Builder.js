import React, { Component } from 'react'
import axios from 'axios'
import PokeTeam from './PokeTeam'
import PokeGrid from './PokeGrid'

//TODO Currently, the sort by region function sets the state permanently to the sliced array, thus only allowing 
//TODO .... it to be searched for a single time. NEED TO FIX!!!!
//! Fixed!!!: Fixed it by adding a list that would be manipulated every time rather than manipulate the main data set

export class Builder extends Component {
    state = {
        region: '2',
        pokeList: [],
        regionalList: []
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
    getRegion = async (newRegion) => {
        await this.setState({
            region: newRegion
        })
    }
    render() {
        return (
            <div className='builder'>
                {/* //TODO PokeTeam At the Top */}
                <PokeGrid pokeGrid={this.state.regionalList} getRegion={this.getRegion} regionPokemon={this.regionPokemon} />
            </div>
        )
    }
}

export default Builder
