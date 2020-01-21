import React, { Component } from 'react'
import '../../styles/MoveModalForm.css'

class MoveModalForm extends Component {
    //! I am aware this is terribly handled, but I didnt know how to do it without hardcoding the individual values, then puttin them into an array  
    state = {
        chosenMoves: [],
        move1: '',
        move2: '',
        move3: '',
        move4: ''
    }

    handleChange = evt => {
        evt.preventDefault();
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        const { move1, move2, move3, move4 } = this.state
        await this.setState({
            chosenMoves: [move1, move2, move3, move4]
        })
        this.props.getMoves(this.state.chosenMoves)
    }

    handleCancel = () => {
        this.props.cancel()
    }

    render() {
        const moveSelect = this.props.moves.map(move => {
            const moveName = move.move.name
            return <option key={moveName} value={moveName}>{moveName}</option>
        })
        return (
            <div>
                <div className='modalForm'>
                    <img className='modalImg' alt={this.props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}></img>
                    <form className='' onSubmit={this.handleSubmit} >
                        <div className='moveSelectForm'>
                            <select className='moveSelect' value={this.state.move1} name='move1' onChange={this.handleChange}>
                                <option>Select Move</option>
                                {moveSelect}
                            </select>
                        </div>
                        <div className='moveSelectForm'>
                            <select className='moveSelect' value={this.state.move2} name='move2' onChange={this.handleChange}>
                                <option>Select Move</option>
                                {moveSelect}
                            </select>
                        </div>
                        <div className='moveSelectForm'>
                            <select className='moveSelect' value={this.state.move3} name='move3' onChange={this.handleChange}>
                                <option>Select Move</option>
                                {moveSelect}
                            </select>
                        </div>
                        <div className='moveSelectForm'>
                            <select className='moveSelect' value={this.state.move4} name='move4' onChange={this.handleChange}>
                                <option>Select Move</option>
                                {moveSelect}
                            </select>
                        </div>
                        <button className='clearTeam modalButtons' type='submit'>Save</button>
                        <button className='clearTeam modalButtons' onClick={this.handleCancel}>Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default MoveModalForm
