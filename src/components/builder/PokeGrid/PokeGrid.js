import React, { memo } from 'react'
import PokeCard from '../../general/PokeCard/PokeCard'
import useFormState from '../../../hooks/useFormState'
import './PokeGrid.css'

const PokeGrid = ({ addToTeam, pokeGrid, scrolled, regionPokemon }) => {
    const [region, setRegion] = useFormState('')

    const handleForm = (evt) => {
        evt.preventDefault();
        regionPokemon(region)
    }

    const pokemon = pokeGrid.map((pokemon) => {
        const name = pokemon.pokemon_species.name
        const id = pokemon.entry_number
        const captital = name.charAt(0).toUpperCase() + name.slice(1)
        return (
            <div onClick={() => addToTeam(captital, id)} key={name}>
                <PokeCard
                    capital={captital}
                    name={name}
                    index={id}
                />
            </div>
        )
    })
    return (
        <div className={scrolled}>
            <form className='regionSelect' onSubmit={handleForm}>
                <select value={region} name='regionForm' onChange={setRegion}>
                    <option value=''>Region</option>
                    <option value='0'>All</option>
                    <option value='1'>Kanto</option>
                    <option value='2'>Johto</option>
                    <option value='3'>Hoenn</option>
                    <option value='4'>Sinnoh</option>
                    <option value='5'>Unova</option>
                    <option value='6'>Kalos</option>
                    <option value='7'>Alola</option>
                </select>
                <button type='submit'>Find</button>
            </form>
            <div className='pokeGrid'>
                {pokemon}
            </div>
        </div>
    )
}

export default memo(PokeGrid)
