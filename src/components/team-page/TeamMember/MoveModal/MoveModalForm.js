import React, { useState, useEffect } from 'react'
import useFormState from '../../../../hooks/useFormState'
import './MoveModalForm.css'

//TODO chosenMoves.every is not a function
const MoveModalForm = props => {
    const [move1, setM1] = useFormState('')
    const [move2, setM2] = useFormState('')
    const [move3, setM3] = useFormState('')
    const [move4, setM4] = useFormState('')
    const [chosenMoves, setMoves] = useState([])

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setMoves([move1, move2, move3, move4])
    }

    useEffect(() => {
        if (chosenMoves.every(move => move !== '')) {
            const checkIfArrayIsUnique = (myArray) => {
                return myArray.length === new Set(myArray).size;
            }
            if (checkIfArrayIsUnique(chosenMoves)) {
                props.syncMoves(props.pokeName, chosenMoves)
            } else {
                alert('All Moves Must Be Unique')
            }
        } else {
            alert('Must Select Four Moves')
        }
    }, [chosenMoves])

    const moveSelect = props.moves.map(move => {
        const moveName = move.move.name
        const fixedName = props.fixName(moveName)
        return <option key={moveName} value={moveName}>{fixedName}</option>
    })
    return (
        <div>
            <div className='modalForm'>
                <img className='modalImg' alt={props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}></img>
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
                    <button className='clearTeam modalButtons' onClick={props.cancel}>Cancel</button>
                    <button className='clearTeam modalButtons' type='submit'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default MoveModalForm

// class MoveModalForm extends Component {
//     //! I am aware this is terribly handled, but I didnt know how to do it without hardcoding the individual values, then puttin them into an array  
//     state = {
//         chosenMoves: [],
//         move1: '',
//         move2: '',
//         move3: '',
//         move4: ''
//     }

//     handleChange = evt => {
//         evt.preventDefault();
//         this.setState({
//             [evt.target.name]: evt.target.value
//         })
//     }

//     handleSubmit = async (evt) => {
//         evt.preventDefault();
//         await this.setState({
//             chosenMoves: Object.keys(this.state)
//         }, () => {
//             const { chosenMoves } = this.state
//             if (chosenMoves.every(move => move !== '')) {
//                 const checkIfArrayIsUnique = (myArray) => {
//                     return myArray.length === new Set(myArray).size;
//                 }
//                 if (checkIfArrayIsUnique(chosenMoves)) {
//                     this.props.syncMoves(this.props.pokeName, this.state.chosenMoves)
//                 } else {
//                     alert('All Moves Must Be Unique')
//                 }
//             } else {
//                 alert('Must Select Four Moves')
//             }
//         })
//     }

//     handleCancel = () => {
//         this.props.cancel()
//     }

//     render() {
//         const moveSelect = this.props.moves.map(move => {
//             const moveName = move.move.name
//             const fixedName = this.props.fixName(moveName)
//             return <option key={moveName} value={moveName}>{fixedName}</option>
//         })
//         return (
//             <div>
//                 <div className='modalForm'>
//                     <img className='modalImg' alt={this.props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}></img>
//                     <form className='' onSubmit={this.handleSubmit} >
//                         <div className='moveSelectForm'>
//                             <select className='moveSelect' value={this.state.move1} name='move1' onChange={setM1}>
//                                 <option>Select Move</option>
//                                 {moveSelect}
//                             </select>
//                         </div>
//                         <div className='moveSelectForm'>
//                             <select className='moveSelect' value={this.state.move2} name='move2' onChange={setM2}>
//                                 <option value=''>Select Move</option>
//                                 {moveSelect}
//                             </select>
//                         </div>
//                         <div className='moveSelectForm'>
//                             <select className='moveSelect' value={this.state.move3} name='move3' onChange={setM3}>
//                                 <option value=''>Select Move</option>
//                                 {moveSelect}
//                             </select>
//                         </div>
//                         <div className='moveSelectForm'>
//                             <select className='moveSelect' value={this.state.move4} name='move4' onChange={setM4}>
//                                 <option value=''>Select Move</option>
//                                 {moveSelect}
//                             </select>
//                         </div>
//                         <button className='clearTeam modalButtons' onClick={this.props.cancel}>Cancel</button>
//                         <button className='clearTeam modalButtons' type='submit'>Save</button>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }

// export default MoveModalForm
