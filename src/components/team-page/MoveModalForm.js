import React, { Component } from 'react'
import axios from 'axios'

class MoveModalForm extends Component {
    state = {

    }

    handleChange = evt => {

    }

    getMoveList = async () => {
        const pokeData = axios.get('https://pokeapi.co/api/v2/pokemon/3/')
        const moveList = pokeData.moves
    }



    render() {
        return (
            <div className='modalBackground'>
                <img className='savedTeamImg' alt={this.props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}></img>
                <form className='' onSubmit={this.handleForm}>
                    <select value={this.state.regionForm} name='regionForm' onChange={this.handleChange}>
                        <option value=''>Region</option>
                        <option value='1'>Kanto</option>
                        <option value='2'>Johto</option>
                        <option value='3'>Hoenn</option>
                        <option value='4'>Sinnoh</option>
                        <option value='5'>Unova</option>
                        <option value='6'>Kalos</option>
                    </select>
                    <select value={this.state.regionForm} name='regionForm' onChange={this.handleChange}>
                        <option value=''>Region</option>
                        <option value='1'>Kanto</option>
                        <option value='2'>Johto</option>
                        <option value='3'>Hoenn</option>
                        <option value='4'>Sinnoh</option>
                        <option value='5'>Unova</option>
                        <option value='6'>Kalos</option>
                    </select>
                    <select value={this.state.regionForm} name='regionForm' onChange={this.handleChange}>
                        <option value=''>Region</option>
                        <option value='1'>Kanto</option>
                        <option value='2'>Johto</option>
                        <option value='3'>Hoenn</option>
                        <option value='4'>Sinnoh</option>
                        <option value='5'>Unova</option>
                        <option value='6'>Kalos</option>
                    </select>
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
            </div>
        )
    }
}

export default MoveModalForm
