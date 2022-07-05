import React from 'react'
import { typeColors } from '../../data/typeColors'

const TypeIcon = ({type}) => {

    const pokemonType = type['type']['name']


    return (
        <div className='type-icon' style={{backgroundColor: `${typeColors[pokemonType]}`}}>
            {pokemonType}
        </div>
    )
}

export default TypeIcon