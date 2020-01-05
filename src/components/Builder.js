import React, { Component } from 'react'
import axios from 'axios'
import PokeTeam from './PokeTeam'
import PokeGrid from './PokeGrid'



export class Builder extends Component {
    state = {
        region: '1',
        pokeList: []
    }
    getPokermans = async () => {
        const url = `https://pokeapi.co/api/v2/pokedex/${this.state.region}/`
        const pokemon = await axios.get(url)
        const pokeData = pokemon.data.pokemon_entries
        this.setState({
            pokeList: [...pokeData]
        })
    }
    getRegion = async (newRegion) => {
        await this.setState({
            region: newRegion
        })
    }

    render() {
        this.getPokermans();
        return (
            <div className='builder'>
                {/* //TODO PokeTeam At the Top */}
                <PokeGrid pokeGrid={this.state.pokeList} getRegion={this.getRegion} />
            </div>
        )
    }
}

export default Builder
