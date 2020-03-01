import React, { useState } from 'react'
import './MoveModalForm.css'

const MoveModalForm = ({ pokeName, syncMoves, setForm, moves, id, fixName }) => {
    const [formInvalid, setInvalid] = useState({ invalid: false, message: '' })
    const [moveForm, setMoves] = useState({
        move1: '',
        move2: '',
        move3: '',
        move4: '',
    })
    const { move1, move2, move3, move4 } = moveForm

    const onChange = e => setMoves({ ...moveForm, [e.target.name]: e.target.value })

    const handleSubmit = (evt) => {
        evt.preventDefault();
        checkValid(Object.values(moveForm))
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
                        <select className='moveSelect' value={move1} name='move1' onChange={onChange}>
                            <option>Select Move</option>
                            {moveSelect}
                        </select>
                    </div>
                    <div className='moveSelectForm'>
                        <select className='moveSelect' value={move2} name='move2' onChange={onChange}>
                            <option value=''>Select Move</option>
                            {moveSelect}
                        </select>
                    </div>
                    <div className='moveSelectForm'>
                        <select className='moveSelect' value={move3} name='move3' onChange={onChange}>
                            <option value=''>Select Move</option>
                            {moveSelect}
                        </select>
                    </div>
                    <div className='moveSelectForm'>
                        <select className='moveSelect' value={move4} name='move4' onChange={onChange}>
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
