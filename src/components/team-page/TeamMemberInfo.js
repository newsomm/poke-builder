import React, { Component } from 'react'
import axios from 'axios'
import '../../styles/TeamMemberInfo.css'
import Type from '../general/Type'
import MoveModalForm from './MoveModalForm'
import Background from '../general/Background'
import Move from './Move'
import Loader from '../general/Loader'

class TeamMemberInfo extends Component {
    state = {
        moves: [],
        types: [],
        name: '',
        addingMoves: false,
        chosenMoves: [],
        movesChosen: false,
        isLoaded: false
    }

    componentDidMount() {
        this.getIndividualData();
    }

    getIndividualData = async () => {
        const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.id}/`)
        const { moves, name, types } = pokeData.data
        this.setState({
            moves: moves,
            name: name,
            types: types,
            isLoaded: true
        })
    }

    getSelectedMoves = moves => {
        this.setState({
            chosenMoves: moves,
            addingMoves: false,
            movesChosen: true
        })
    }

    addingHandler = () => {
        this.setState({
            addingMoves: true
        })
    }
    modalCancel = () => {
        this.setState({
            addingMoves: false
        })
    }

    fixName = str => {
        let name;
        if (str.includes('-')) {
            let arr = str.split('-')
            const fixedArr = arr.map(str => {
                let fixedMove = str.charAt(0).toUpperCase() + str.slice(1)
                return fixedMove
            })
            name = fixedArr.join(' ')
        } else {
            name = str.charAt(0).toUpperCase() + str.slice(1)
        }
        return name
    }

    render() {
        const displayMoves = () => {
            let moveDisplay = []
            if (localStorage.getItem(this.state.name) === null) {
                for (let i = 1; i < 5; i++) {
                    moveDisplay.push(
                        <div key={`move-${i}`} className='move'>
                            <h1>Move {i}</h1>
                            <div className='typePP'>
                                <Type type={'normal'} />
                                <h1>PP  ?/?</h1>
                            </div>
                        </div>
                    )
                }
            } else {
                const savedMoves = JSON.parse(window.localStorage.getItem(this.state.name))
                const moves = savedMoves.map(move => (
                    <Move name={move} fixName={this.fixName} key={move} />
                ))
                moveDisplay = moves
            }
            return moveDisplay
        }

        const types = this.state.types.map(type => (
            <Type id={type.type.name} type={type.type.name} key={type.type.name} />
        ))
        return (
            <div>
                {this.state.isLoaded ? (
                    <div>
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
                                    {displayMoves()}
                                    <div className='movesetButton'>
                                        <button className='clearTeam cTButton' onClick={this.addingHandler}>Edit Moveset</button>
                                    </div>
                                </ul>
                            </div>
                            <div key='moves'>
                                {this.state.addingMoves ? [<Background cancel={this.modalCancel} key='background' />, <MoveModalForm pokeName={this.state.name} key='modalForm' moves={this.state.moves} syncMoves={this.props.getMoves} getMoves={this.getSelectedMoves} cancel={this.modalCancel} id={this.props.id} fixName={this.fixName} />] : null}
                            </div>
                        </div>
                    </div>
                ) :
                    (
                        <div className='teamMemberInfo loaderBox'>
                            <Loader />
                        </div>
                    )
                }
            </div>
        )
    }
}

export default TeamMemberInfo
