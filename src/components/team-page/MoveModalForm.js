import React, { Component } from 'react'
import axios from 'axios'
import '../../styles/MoveModalForm.css'

class MoveModalForm extends Component {
    state = {

    }

    handleChange = evt => {
        evt.preventDefault();
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleCancel = () => {
        this.props.cancel()
    }

    getMoveList = async () => {
        const pokeData = axios.get('https://pokeapi.co/api/v2/pokemon/3/')
        const moveList = pokeData.moves
    }

    render() {
        return (
            <div>
                <div className='modalForm'>
                    <img className='savedTeamImg' alt={this.props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}></img>
                    <form className='' onSubmit={this.handleForm}>
                        <div>
                            <select value={this.state.regionForm} name='regionForm' onChange={this.handleChange}>
                                <option value=''>Region</option>
                                <option value='1'>Kanto</option>
                                <option value='2'>Johto</option>
                                <option value='3'>Hoenn</option>
                                <option value='4'>Sinnoh</option>
                                <option value='5'>Unova</option>
                                <option value='6'>Kalos</option>
                            </select>
                        </div>
                        <div>
                            <select value={this.state.regionForm} name='regionForm' onChange={this.handleChange}>
                                <option value=''>Region</option>
                                <option value='1'>Kanto</option>
                                <option value='2'>Johto</option>
                                <option value='3'>Hoenn</option>
                                <option value='4'>Sinnoh</option>
                                <option value='5'>Unova</option>
                                <option value='6'>Kalos</option>
                            </select>
                        </div>
                        <div>
                            <select value={this.state.regionForm} name='regionForm' onChange={this.handleChange}>
                                <option value=''>Region</option>
                                <option value='1'>Kanto</option>
                                <option value='2'>Johto</option>
                                <option value='3'>Hoenn</option>
                                <option value='4'>Sinnoh</option>
                                <option value='5'>Unova</option>
                                <option value='6'>Kalos</option>
                            </select>
                        </div>
                        <div>
                            <select value={this.state.regionForm} name='regionForm' onChange={this.handleChange}>
                                <option value=''>Region</option>
                                <option value='1'>Kanto</option>
                                <option value='2'>Johto</option>
                                <option value='3'>Hoenn</option>
                                <option value='4'>Sinnoh</option>
                                <option value='5'>Unova</option>
                                <option value='6'>Kalos</option>
                            </select>
                        </div>
                        <button className='clearTeam' type='submit'>Save</button>
                        <button className='clearTeam' onClick={this.handleCancel}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default MoveModalForm
