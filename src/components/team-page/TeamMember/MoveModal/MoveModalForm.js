import React, { useState } from 'react'
import useFormState from '../../../../hooks/useFormState'
import './MoveModalForm.css'

const MoveModalForm = ({ pokeName, syncMoves, setForm, moves, id, fixName }) => {
    const [move1, setM1] = useFormState('')
    const [move2, setM2] = useFormState('')
    const [move3, setM3] = useFormState('')
    const [move4, setM4] = useFormState('')
    const [formInvalid, setInvalid] = useState({ invalid: false, message: '' })

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const moves = [move1, move2, move3, move4]
        checkValid(moves)
    }

    const checkValid = arr => {
        if (arr.every(move => move !== '')) {
            const checkIfArrayIsUnique = (myArray) => {
                return myArray.length === new Set(myArray).size;
            }
            if (checkIfArrayIsUnique(arr)) {
                syncMoves(pokeName, arr)
                setForm()
            } else {
                setInvalid({ invalid: true, message: 'All Moves Must Be Unique' })
            }
        } else {
            setInvalid({ invalid: true, message: 'Must Select Four Moves' })
        }
    }

    const moveSelect = moves.map(move => {
        const moveName = move.move.name
        const fixedName = fixName(moveName)
        return <option key={moveName} value={moveName}>{fixedName}</option>
    })
    return (
        <div>
            <div className='modalForm'>
                <img className='modalImg' alt={pokeName} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
                {formInvalid.invalid && <p className='formInvalid'><i className="fas fa-times-circle"></i> Form Invalid: {formInvalid.message}</p>}
                <form className='' onSubmit={handleSubmit} >
                    <div className='moveSelectForm'>
                        <select className='moveSelect' value={move1} name='move1' onChange={setM1}>
                            <option>Select Move</option>
                            {moveSelect}
                        </select>
                    </div>
                    <div className='moveSelectForm'>
                        <select className='moveSelect' value={move2} name='move2' onChange={setM2}>
                            <option value=''>Select Move</option>
                            {moveSelect}
                        </select>
                    </div>
                    <div className='moveSelectForm'>
                        <select className='moveSelect' value={move3} name='move3' onChange={setM3}>
                            <option value=''>Select Move</option>
                            {moveSelect}
                        </select>
                    </div>
                    <div className='moveSelectForm'>
                        <select className='moveSelect' value={move4} name='move4' onChange={setM4}>
                            <option value=''>Select Move</option>
                            {moveSelect}
                        </select>
                    </div>
                    <button className='clearTeam modalButtons' onClick={setForm}>Cancel</button>
                    <button className='clearTeam modalButtons' type='submit'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default MoveModalForm
