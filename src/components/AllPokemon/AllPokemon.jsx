import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import SearchBar from '../SearchBar/SearchBar'

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