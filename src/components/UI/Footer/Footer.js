import React from 'react'
import './Footer.css'

const footer = () => (
    <div className='footer'>
        <ul className='flinks'>
            <li><a href='https://github.com/newsomm/poke-builder'>Github <i className="fab fa-github"></i></a></li>
            <li><a href='https://www.linkedin.com/in/mason-newsom-a699b81a1/'>LinkedIn <i className="fab fa-linkedin"></i></a></li>
        </ul>
        <ul className='copyright'>
            <li>Pokémon characters and names are copyright © The Pokémon Company and/or Nintendo</li>
            <li>PokéAPI is © of Paul Hallet and contributors 2013–2019 </li>
        </ul>
    </div>
)

export default footer 