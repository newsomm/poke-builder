import React, { Component } from 'react'
import '../styles/PokeCard.css'


class PokeCard extends Component {
    render() {
        return (
            <div className='pokecard'>
                <div>
                    {/* <a href={`http://pokemondb.net/pokedex/${this.props.name}`}><img className='img' src={`https://img.pokemondb.net/sprites/x-y/normal/${this.props.name}.png`} alt={this.props.name}></img></a> */}
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.index}.png`}></img>
                </div>
                <div>
                    <h1>{this.props.capital}</h1>
                </div>

            </div>
        )
    }

}
export default PokeCard
