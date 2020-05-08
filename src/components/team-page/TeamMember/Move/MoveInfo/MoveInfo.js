import React from 'react'
import Type from '../../../../general/Type/Type'
import './MoveInfo.css'

// ot src="https://i.stack.imgur.com/LWKMo.png"
// spec https://i.stack.imgur.com/dS0qQ.png
// phys "https://i.stack.imgur.com/UATOp.png"


const MoveInfo = ({ info: { power, pp, type, damageClass, accuracy }, name }) => {
    const classURL = (classType) => {
        let type;
        switch (classType) {
            case 'physical':
                type = 'UATOp'
                break;
            case 'special':
                type = 'dS0qQ'
                break;
            default:
                type = 'LWKMo'
        }
        return type
    }


    return (
        <div className='moveInfo'>
            <div className='infoDisplay'>
                <h1>{name}</h1>
                <Type type={type} />
                <h1>PP  {pp}/{pp}</h1>
            </div>
            <hr></hr>
            <div className='mainInfo'>
                <div className='category'>
                    <h1>Category :</h1>
                    <div className='dClass'>
                        <h1>{damageClass.toUpperCase()}</h1>
                        <img alt='damageClass' src={`https://i.stack.imgur.com/${classURL(damageClass)}.png`}></img>
                    </div>
                </div>
                <div className='category'>
                    <h1>Power : {power}</h1>
                    <h1>Accuracy : {accuracy}</h1>
                </div>

            </div>

        </div>
    )
}

export default MoveInfo
