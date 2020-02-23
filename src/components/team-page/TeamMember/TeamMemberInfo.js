import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Type from '../../general/Type/Type'
import MoveModalForm from './MoveModal/MoveModalForm'
import Background from '../../UI/Background/Background'
import Move from './Move/Move'
import Loader from '../../general/Loader/Loader'
import useToggleState from '../../../hooks/useToggleState'
import './TeamMemberInfo.css'

const TeamMemberInfo = props => {
    const [moves, setMoves] = useState([])
    const [name, setName] = useState('')
    const [types, setTypes] = useState([])
    const [isLoaded, setLoaded] = useState(false)
    const [adding, addingToggle] = useToggleState()

    useEffect(() => {
        const getIndividualData = async () => {
            const pokeData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}/`)
            const { moves, name, types } = pokeData.data
            setMoves(moves)
            setName(name)
            setTypes(types)
            setLoaded(true)
        }
        getIndividualData();
    }, [props.id])

    const getSelectedMoves = (name, moves) => {
        window.localStorage.setItem(
            `${name}`,
            JSON.stringify(moves))

    }

    const fixName = str => {
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

    const displayMoves = () => {
        let moveDisplay = []
        if (localStorage.getItem(name) === null) {
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
            const savedMoves = JSON.parse(window.localStorage.getItem(name))
            const moves = savedMoves.map(move => (
                <Move name={move} fixName={fixName} key={move} />
            ))
            moveDisplay = moves
        }
        return moveDisplay
    }

    return (
        <div>
            {isLoaded ? (
                <div key={props.id} className='teamMemberInfo'>
                    <div>
                        <p>No. {props.id}</p>
                        <img className='savedTeamImg' alt={props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}></img>
                        <h3>{props.name}</h3>
                        <div className='savedTypeList'>
                            {types.map(type => (
                                <Type id={type.type.name} type={type.type.name} key={type.type.name} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <ul className='moveList'>
                            {displayMoves()}
                            <div className='movesetButton'>
                                <button className='clearTeam cTButton' onClick={addingToggle}>Edit Moveset</button>
                            </div>
                        </ul>
                    </div>
                    <div key='moves'>
                        {adding ? [
                            <Background
                                cancel={addingToggle}
                                key='background'
                            />,
                            <MoveModalForm
                                pokeName={name} key='modalForm'
                                moves={moves}
                                syncMoves={getSelectedMoves}
                                cancel={addingToggle}
                                id={props.id}
                                fixName={fixName}
                            />] :
                            null
                        }
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

export default TeamMemberInfo

