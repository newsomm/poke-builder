import React from 'react'
import './PokeCard.css'


const PokeCard = ({ name, capital, index }) => (
    <div className='pokecard' key={name}>
        <img className='img' alt={name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}></img>
        <h1>{capital}</h1>
    </div>
)

export default PokeCard