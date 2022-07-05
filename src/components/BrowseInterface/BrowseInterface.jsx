import React from 'react'
import AllPokemon from '../AllPokemon/AllPokemon'
import SearchBar from '../SearchBar/SearchBar'
import { pokemonData } from '../../data/pokemon'

const BrowseInterface = () => {
  return (
    <div className='all-pokemon'>
        <SearchBar />
        <AllPokemon pokemon={pokemonData}/>
    </div>
  )
}

export default BrowseInterface