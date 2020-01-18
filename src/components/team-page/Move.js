import React, { Component } from 'react'
import axios from 'axios'
import Type from '../team-builder/Type'
import '../../styles/Move.css'


//TODO Figure out the move api and use it per move call to get data 

//! Move will just be a display component that gets the move data from the parent and displays it

//* API Call listed at thus address https://pokeapi.co/api/v2/move/33/

class Move extends Component {
    state = {
        name: '',
        power: '',
        type: '',
        pp: ''
    }
    getMoveData = async () => {
        const move = await axios.get('https://pokeapi.co/api/v2/move/128/')
        const { name, power, pp, type } = move.data
        this.setState({
            name: name,
            power: power,
            type: type.name,
            pp: pp
        })
    }

    componentDidMount() {
        this.getMoveData()
    }

    render() {
        const { name, pp, type } = this.state
        const captital = name.charAt(0).toUpperCase() + name.slice(1)
        return (
            <div className='move'>
                <h1>{captital}</h1>
                {/* <h1>{power}</h1> */}
                <div className='typePP'>
                    <Type type={type} />
                    <h1>PP  {pp}/{pp}</h1>
                </div>
            </div>
        )
    }
}

export default Move
