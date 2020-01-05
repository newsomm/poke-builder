import React, { Component } from 'react'
import axios from 'axios'
import PokeCard from './PokeCard'
import '../styles/PokeGrid.css'

class PokeGrid extends Component {
    state = {
        regionForm: '',
        sprites: []
    }
    getPokemonInfo = async (pokemon) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
        const pokeInfo = await axios.get(url)
        const pokeSprite = pokeInfo.data.id
        return pokeSprite
    }
    handleChange = evt => {
        evt.preventDefault();
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleForm = (evt) => {
        evt.preventDefault();
        this.props.getRegion(this.state.regionForm)
        this.setState({
            city: '',
            state: ''
        })

    }



    render() {
        const pokegrids = this.props.pokeGrid.map((pokemon, index) => {
            const name = pokemon.pokemon_species.name
            let indexNum = index + 1
            const captital = name.charAt(0).toUpperCase() + name.slice(1)
            return <PokeCard
                capital={captital}
                name={name}
                key={name}
                index={indexNum}
            // id={id}
            />
        })
        return (
            <div>
                <form className='regionSelect' onSubmit={this.handleForm}>
                    <select value={this.state.regionForm} name='regionForm' onChange={this.handleChange}>
                        <option value='1'>Kanto</option>
                        <option value='2'>Johto</option>
                        <option value='3'>Hoenn</option>
                        <option value='4'>Sinnoh</option>
                        <option value='5'>Unova</option>
                    </select>
                    <button type='submit'>Find</button>
                </form>

                <div className='pokeGrid'>
                    {pokegrids}
                </div>
            </div>

        )
    }
}

export default PokeGrid
