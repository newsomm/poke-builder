import React, { Component } from 'react'
import '../../styles/Types.css'
import uuid from 'uuid'

class Type extends Component {
    state = {
        color: ''
    }
    componentDidMount() {
        this.typeColor(this.props.type)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this.typeColor(this.props.type)
        }
    }

    typeColor = (type) => {
        let color;
        if (type === 'fire') {
            color = '#f72516'
        } else if (type === 'water') {
            color = '#0384fc'
        } else if (type === 'bug') {
            color = '#94b842'
        } else if (type === 'dark') {
            color = '#544a32'
        } else if (type === 'dragon') {
            color = '#4547ba'
        } else if (type === 'electric') {
            color = '#ffd817'
        } else if (type === 'fairy') {
            color = '#ffb0df'
        } else if (type === 'fighting') {
            color = '#702d00'
        } else if (type === 'flying') {
            color = '#54a1ff'
        } else if (type === 'ghost') {
            color = '#473da1'
        } else if (type === 'grass') {
            color = '#05b53a'
        } else if (type === 'ground') {
            color = '#a19064'
        } else if (type === 'ice') {
            color = '#03f0fc'
        } else if (type === 'normal') {
            color = '#b0b0b0'
        } else if (type === 'poison') {
            color = '#7024a3'
        } else if (type === 'psychic') {
            color = '#ff40b9'
        } else if (type === 'rock') {
            color = '#c7c679'
        } else if (type === 'steel') {
            color = '#8c8c8c'
        }
        this.setState({
            color: color
        })
    }
    render() {
        return (
            <div>
                <li key={uuid()} className='type' style={{ backgroundColor: `${this.state.color}` }}>{this.props.type.toUpperCase()}</li>
            </div>
        )
    }
}

export default Type
