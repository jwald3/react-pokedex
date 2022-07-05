import React from 'react'
import TypeIcon from '../TypeIcon/TypeIcon';

const PokemonTypes = ({types}) => {
  return (
    <div className="type-container">
        {types.length > 1 ? "Types"  : "Type"}
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