import React, { Component } from 'react'
import '../styles/PokeCard.css'


class PokeCard extends Component {
    render() {
        return (
            <div className='pokecard' key={this.props.name}>
                <div>
                    <img className='img' alt={this.props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.index}.png`}></img>
                </div>
                <div>
                    <h1>{this.props.capital}</h1>
                </div>

            </div>
        )
    }

}
export default PokeCard
