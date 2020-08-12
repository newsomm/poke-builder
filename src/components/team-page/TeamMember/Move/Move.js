import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Type from '../../../general/Type/Type'
import Loader from '../../../general/Loader/Loader'
import './Move.css'
import MoveInfo from './MoveInfo/MoveInfo'

const Move = ({ name, fixName, profileDisplay, styling }) => {
    const [isLoaded, setLoaded] = useState(false)
    const [moveInfoDisplay, setDisplay] = useState(false)
    const [moveData, setData] = useState({
        type: '',
        power: '',
        damageClass: '',
        pp: '',
        accuracy: '',
        desc: ''
    })
    const { type, pp } = moveData
    const fixedName = fixName(name)

    useEffect(() => {
        const getMoveData = async () => {
            const move = await axios.get(`https://pokeapi.co/api/v2/move/${name}/`)
            const { pp, type, power, damage_class, accuracy, flavor_text_entries } = move.data
            setData({
                ...moveData,
                type: type.name,
                power: power,
                damageClass: damage_class.name,
                pp: pp,
                accuracy: accuracy,
                desc: flavor_text_entries[2]
            })
            setLoaded(true)
        }
        getMoveData();
    }, [name])

    return (
        <div className={`move ${!profileDisplay && 'selection'} ${styling}`}>
            {isLoaded ? (
                <>
                    <div>
                        <div style={{ display: 'inline-flex' }} className='basicMoveInfo'>
                            <h1 className={`moveNames ${!profileDisplay && 'modalMoveName'}`}>{fixedName}</h1>
                            <i className="fas fa-info-circle"
                                onMouseEnter={() => setDisplay(true)}
                                onMouseLeave={() => setDisplay(false)}
                            ></i>
                            {!profileDisplay && <Type type={type} />}
                        </div>
                        {profileDisplay &&
                            <div className={`typePP ${!profileDisplay && 'modalDisplay'}`}>
                                <Type type={type} />
                                <h1>PP  {pp}/{pp}</h1>
                            </div>
                        }

                    </div>
                    {moveInfoDisplay &&
                        <>
                            <MoveInfo info={moveData} name={fixedName} />
                        </>
                    }
                </>
            ) :
                <Loader height='16px' width='16px' />
            }

        </div>
    )
}
export default Move