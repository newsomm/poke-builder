import React, { Component } from 'react'
import axios from 'axios'
import Type from './Type'
import '../styles/TeamMember.css'


class TeamMember extends Component {
    state = {
        types: []
    }

    componentDidMount() {
        this.getType()
    }

    getType = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${this.props.index}`
        const pokeTypeData = await axios.get(url)
        const getTypes = pokeTypeData.data.types
        this.setState({
            types: [...getTypes]
        })
    }

    render() {
        const types = this.state.types.map(type => (
            <Type id={this.props.index} type={type.type.name} key={type.type.name} />
        ))
        return (
            <div>
                <div className='teamcard' key={this.props.name}>
                    <div>
                        <img className='teamImg' alt={this.props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.index}.png`}></img>
                    </div>
                    <div>
                        <h1>{this.props.capital}</h1>
                    </div>
                </div>
                <div className='typeList'>
                    {types}
                </div>
            </div>
        )
    }
}
export default TeamMember
