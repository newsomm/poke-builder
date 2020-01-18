import React, { Component } from 'react'
import axios from 'axios'
import '../../styles/TeamMemberInfo.css'
import Type from '../team-builder/Type'
import Move from './Move'



//! Team Member will be the primary parent that makes API calls and sends it to the child components to handle the info

class TeamMemberInfo extends Component {
    state = {
        moves: [],
        types: []
    }
    componentDidMount() {
        this.getIndividualData();
    }

    getIndividualData = async () => {
        //! Will change to pass in props as url params 
        const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.id}/`)
        const { moves, name, types } = pokeData.data
        this.setState({
            moves: moves,
            name: name,
            types: types
        })
    }

    render() {
        const types = this.state.types.map(type => (
            <Type id={type.type.name} type={type.type.name} key={type.type.name} />
        ))
        return (
            <div key={this.props.id} className='teamMemberInfo'>
                <div>
                    <p>No. {this.props.id}</p>
                    <img className='savedTeamImg' alt={this.props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}></img>
                    <h3>{this.props.name}</h3>
                    <div className='savedTypeList'>
                        {types}
                    </div>
                </div>
                <div>
                    <ul className='moveList'>
                        {/* <li>Move</li>
                        <li>Move</li>
                        <li>Move</li>
                        <li>Move</li> */}
                        <Move />
                        <Move />
                        <Move />
                        <Move />
                    </ul>
                </div>

            </div>
        )
    }
}

export default TeamMemberInfo
