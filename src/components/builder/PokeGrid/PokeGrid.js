import React, { PureComponent } from 'react'
import PokeCard from '../../general/PokeCard/PokeCard'
import './PokeGrid.css'

class PokeGrid extends PureComponent {
    state = {
        regionForm: ''
    }

    handleChange = evt => {
        evt.preventDefault();
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    addToTeam = (name, id) => {
        this.props.addToTeam(name, id)
    }
    handleForm = (evt) => {
        evt.preventDefault();
        this.props.getRegion(this.state.regionForm)
        this.props.regionPokemon(this.state.regionForm)
    }
    render() {
        const pokegrids = this.props.pokeGrid.map((pokemon) => {
            const name = pokemon.pokemon_species.name
            const id = pokemon.entry_number
            const captital = name.charAt(0).toUpperCase() + name.slice(1)
            return (
                <div onClick={() => this.addToTeam(captital, id)} key={name}>
                    <PokeCard
                        capital={captital}
                        name={name}
                        index={id}
                    />
                </div>
            )
        })
        return (
            <div className={this.props.scrolled}>
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