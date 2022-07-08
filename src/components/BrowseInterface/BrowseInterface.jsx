import React, { useContext } from 'react'
import AllPokemon from '../AllPokemon/AllPokemon'
import SearchBar from '../SearchBar/SearchBar'
import { pokemonData } from '../../data/pokemon'
import { AppContext } from '../../App'
import './BrowseInterface.css';

const BrowseInterface = () => {
    const { searchQuery } = useContext(AppContext);

    return (
        <div className='browse-interface-container'>
            <SearchBar />
            <AllPokemon 
                pokemon={pokemonData.filter(pokemon => 
                    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()))
                }/>
        </div>
    )
}

export default BrowseInterface