import React, { Component } from 'react'
import PokeCard from './PokeCard'
import '../styles/PokeGrid.css'

class PokeGrid extends Component {
    state = {
        regionForm: ''
    }
    handleChange = evt => {
        evt.preventDefault();
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleForm = async (evt) => {
        evt.preventDefault();
        await this.props.getRegion(this.state.regionForm)
        this.props.regionPokemon(this.state.regionForm)
        // this.setState({
        //     regionForm: ''
        // })
    }



    render() {
        const pokegrids = this.props.pokeGrid.map((pokemon, index) => {
            const name = pokemon.pokemon_species.name
            let indexNum = index + 1
            const id = pokemon.entry_number
            const captital = name.charAt(0).toUpperCase() + name.slice(1)
            return <PokeCard
                capital={captital}
                name={name}
                key={name}
                index={id}
            // id={id}
            />
        })
        return (
            <div>
                <form className='regionSelect' onSubmit={this.handleForm}>
                    <select value={this.state.regionForm} name='regionForm' onChange={this.handleChange}>
                        <option value=''>Region</option>
                        <option value='1'>Kanto</option>
                        <option value='2'>Johto</option>
                        <option value='3'>Hoenn</option>
                        <option value='4'>Sinnoh</option>
                        <option value='5'>Unova</option>
                        <option value='6'>Kalos</option>
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
