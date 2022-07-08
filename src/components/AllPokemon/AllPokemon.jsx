import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import './AllPokemon.css'

const AllPokemon = ({pokemon}) => {
  
    return (
        <div className='all-pokemon'>
            {pokemon.map(poke => { return (
                <PokemonCard pokemon={poke}/>
            )})}
        </div>
    )
}

export default AllPokemon