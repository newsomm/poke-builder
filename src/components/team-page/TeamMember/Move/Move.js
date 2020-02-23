import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Type from '../../../general/Type/Type'
import Loader from '../../../general/Loader/Loader'
import './Move.css'

const Move = props => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [pp, setPP] = useState('')
    //* Was having issues using my 'useStateToggle' hook here. Had to scrap it 
    const [isLoaded, setLoading] = useState(false)

    const fixedName = props.fixName(name)

    useEffect(() => {
        const getMoveData = async () => {
            const move = await axios.get(`https://pokeapi.co/api/v2/move/${props.name}/`)
            const { name, pp, type } = move.data
            setName(name);
            setType(type.name);
            setPP(pp);
            setLoading(true)
        }
        getMoveData();
    }, [props.name])

    return (
        <div className='move'>
            {isLoaded ? (
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
export default Move