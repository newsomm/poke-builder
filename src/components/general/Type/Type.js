import React from 'react'
import './Types.css'
import uuid from 'uuid'

const type = (props) => {
    let color;
    switch (props.type) {
        case ('fire'):
            color = '#f72516'
            break;
        case ('water'):
            color = '#0384fc'
            break;
        case ('bug'):
            color = '#94b842'
            break;
        case ('dark'):
            color = '#544a32'
            break;
        case ('dragon'):
            color = '#4547ba'
            break;
        case ('electric'):
            color = '#ffd817'
            break;
        case ('fairy'):
            color = '#ffb0df'
            break;
        case ('fighting'):
            color = '#702d00'
            break;
        case ('flying'):
            color = '#54a1ff'
            break;
        case ('ghost'):
            color = '#473da1'
            break;
        case ('grass'):
            color = '#05b53a'
            break;
        case ('ground'):
            color = '#a19064'
            break;
        case ('ice'):
            color = '#03f0fc'
            break;
        case ('normal'):
            color = '#b0b0b0'
            break;
        case ('poison'):
            color = '#7024a3'
            break;
        case ('psychic'):
            color = '#ff40b9'
            break
        case ('rock'):
            color = '#c7c679'
            break;
        case ('steel'):
            color = '#8c8c8c'
            break;
        default:
            color = '#b0b0b0'
            break;
    }
    return (
        <div>
            <li key={uuid()} className='type' style={{ backgroundColor: `${color}` }}>{props.type.toUpperCase()}</li>
        </div>
    )
}

export default type