import React, { useState, useEffect, memo } from 'react'
import axios from 'axios'
import Type from '../../../general/Type/Type'
import Loader from '../../../general/Loader/Loader'
import './TeamMember.css'

const TeamMember = ({ capital, index }) => {
    const [types, setTypes] = useState([])
    useEffect(() => {
        let mounted = true
        const getType = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon/${index}`
            const pokeTypeData = await axios.get(url)
            const getTypes = pokeTypeData.data.types
            if (mounted) {
                setTypes(getTypes)
            }
        }
        getType();
        return () => {
            mounted = false
        }
    }, [index])
    return types.length === 0 ? <div className='teamloader'><Loader /></div> : (
        <div>
            <div className='teamcard' key={capital}>
                <div>
                    <img className='teamImg' alt={capital} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}></img>
                </div>
                <div>
                    <h1>{capital}</h1>
                </div>
            </div>
            <div className='typeList'>
                {types.map(type => (
                    <Type id={index} type={type.type.name} key={type.type.name} font='5px' />
                ))}
            </div>
        </div>
    )

}
export default memo(TeamMember)
