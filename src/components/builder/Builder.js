import React, { useState, useEffect, memo } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import PokeTeam from './PokeTeam/PokeTeam'
import PokeGrid from './PokeGrid/PokeGrid'
import './Builder.css'

const Builder = ({ saveTeam, userTeam }) => {
    const [pokeList, setList] = useState([])
    const [regionList, setRegionList] = useState([])
    const [pokeTeam, setTeam] = useState([])
    const [scrolled, setScrolled] = useState(false)
    const [teamSaved, setSaved] = useState(false)
    const [idFound, setFound] = useState(undefined)

    useEffect(() => {
        const getPokemon = async () => {
            const url = `https://pokeapi.co/api/v2/pokedex/national/`
            const pokemon = await axios.get(url)
            const pokeData = pokemon.data.pokemon_entries
            setList([...pokeData])
            setRegionList([...pokeData])
        }
        getPokemon()
        window.addEventListener('scroll', handleScroll)
        if (userTeam !== '') {
            setTeam(userTeam)
        }
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [userTeam])

    const handleSave = () => {
        if (pokeTeam.length === 6) {
            saveTeam(pokeTeam)
            setSaved(true)
        } else {
            alert('Team Must Have 6 Members')
        }
    }

    const handleScroll = () => {
        window.scrollY !== 0 ? setScrolled(true) : setScrolled(false)
    }

    const removeFromTeam = id => {
        setTeam(pokeTeam.filter(pokemon => pokemon.id !== id))
    }

    const regionPokemon = (region) => {
        let pokeData = pokeList
        switch (region) {
            case '1':
                pokeData = pokeData.slice(0, 151)
                break;
            case '2':
                pokeData = pokeData.slice(151, 251)
                break;
            case '3':
                pokeData = pokeData.slice(251, 386)
                break;
            case '4':
                pokeData = pokeData.slice(386, 494)
                break;
            case '5':
                pokeData = pokeData.slice(494, 649)
                break;
            case '6':
                pokeData = pokeData.slice(649, 721)
                break;
            default:
                return pokeData
        }
        setRegionList([...pokeData])
    }

    const addToTeam = (name, id) => {
        const pokeData = {
            name: name,
            id: id
        }
        if (pokeTeam.length <= 5) {
            if (pokeTeam.every(pokemon => pokemon.id !== id)) {
                setFound(false)
                if (!idFound) {
                    setTeam([...pokeTeam, pokeData])
                }
            }
        }
    }

    if (teamSaved) {
        return (
            <Redirect to='/my-team' />
        )
    }

    return (
        <div className='builder' >
            <div className={scrolled ? 'fullTeamFixed' : 'fullTeam'}>
                <PokeTeam pokeTeam={pokeTeam} remove={removeFromTeam} scrolled={scrolled} />
                <div className='teamButtons'>
                    <button onClick={() => setTeam([])} className='clearTeam'>Clear Team</button>
                    <button onClick={handleSave} className='clearTeam'>Save Team</button>
                </div>
            </div>
            <PokeGrid
                scrolled={scrolled ? 'gridComponentFixed' : 'gridComponent'}
                addToTeam={addToTeam}
                pokeGrid={regionList}
                regionPokemon={regionPokemon}
            />
        </div>
    )
}
export default memo(Builder)
