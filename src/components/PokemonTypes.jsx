import React from 'react'
import TypeIcon from './TypeIcon'

const PokemonTypes = ({types}) => {
  return (
    <div className="type-container">
        Types
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