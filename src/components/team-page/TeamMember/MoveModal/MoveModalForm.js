import React, { useState, useEffect } from 'react'
import Move from '../Move/Move'
import './MoveModalForm.css'

const MoveModalForm = ({ pokeName, syncMoves, setForm, moves, id, fixedName }) => {
    const [formInvalid, setInvalid] = useState({ invalid: false, message: '' })
    const [moveForm, setMoves] = useState([])

    useEffect(() => {
        if (localStorage.getItem(pokeName)) {
            const savedMoves = JSON.parse(window.localStorage.getItem(pokeName))
            setMoves(savedMoves)
        }
    }, [pokeName])

    const addMove = (move) => {
        if (moveForm.length < 4) {
            if (moveForm.every(selected => move !== selected)) {
                setMoves([move, ...moveForm])
            }
        }
    }

    const removeMove = move => {
        setMoves(moveForm.filter(selected => move !== selected))
    }

    const checkValid = arr => {
        if (moveForm.length === 4) {
            // const checkIfArrayIsUnique = (myArray) => {
            //     return myArray.length === new Set(myArray).size;
            // }
            syncMoves(pokeName, arr)
            setForm()
        } else {
            setInvalid({ invalid: true, message: 'Must Select Four Moves' })
        }
    }
    return (
        <div className='modalForm' onSubmit={() => checkValid(moveForm)}>
            <img className='modalImg' alt={pokeName} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
            <div className='selectedMoves'>
                {moveForm.map(move => (
                    <div onClick={() => removeMove(move)} key={move}>
                        <Move name={move} key={move} profileDisplay={false} fixName={fixedName} styling={'moveSelect'} />
                    </div>
                ))}
            </div>
            <div className='moveSelectionList'>
                {moves.map(move => {
                    const moveName = move.move.name
                    return (
                        <div onClick={() => addMove(moveName)} key={moveName}>
                            <Move name={moveName} key={moveName} profileDisplay={false} fixName={fixedName} />
                        </div>
                    )
                })}
            </div>
            <button className='clearTeam modalButtons cTButton' onClick={setForm}>Cancel</button>
            <button className='clearTeam modalButtons cTButton' type='submit' onClick={() => checkValid(moveForm)}>Save</button>
        </div>
    )
}

export default MoveModalForm
