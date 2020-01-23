import React, { Component } from 'react'
import axios from 'axios'
import Type from '../general/Type'
import '../../styles/Move.css'
import Loader from '../general/Loader'

class Move extends Component {
    state = {
        name: '',
        power: '',
        type: '',
        pp: '',
        isLoaded: false
    }
    getMoveData = async () => {
        const move = await axios.get(`https://pokeapi.co/api/v2/move/${this.props.name}/`)
        const { name, power, pp, type } = move.data

        this.setState({
            name: name,
            power: power,
            type: type.name,
            pp: pp,
            isLoaded: true
        })
    }

    componentDidMount() {
        this.getMoveData()
    }

    render() {
        const { name, pp, type } = this.state
        const fixedName = this.props.fixName(name)
        return (
            <div className='move'>
                {this.state.isLoaded ? (
                    <div>
                        <h1>{fixedName}</h1>
                        <div className='typePP'>
                            <Type type={type} />
                            <h1>PP  {pp}/{pp}</h1>
                        </div>
                    </div>
                ) :
                    <Loader height='16px' width='16px' />
                }

            </div>
        )
    }
}

export default Move
