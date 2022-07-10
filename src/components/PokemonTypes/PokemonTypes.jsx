import React from 'react'
import TypeIcon from '../TypeIcon/TypeIcon';
import './PokemonTypes.css'

const PokemonTypes = ({types}) => {
  return (
    <div className="type-container">
        <div className="type-label">{types.length > 1 ? "Types"  : "Type"}</div>
        <div className='pokemon-types'>
        {
            types.map(type => (
                <TypeIcon type={type}/>
            ))
        }
        </div>
    </div>
    
  )
}

export default PokemonTypes