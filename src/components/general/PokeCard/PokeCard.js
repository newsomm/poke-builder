import React from 'react'
import './PokeCard.css'


const PokeCard = props => (
    <div className='pokecard' key={props.name}>
        <img className='img' alt={props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`}></img>
        <h1>{props.capital}</h1>
    </div>
)

export default PokeCard