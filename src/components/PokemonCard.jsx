import React, { useContext } from 'react'
import { pokemonData } from '../data/pokemon'
import { AppContext } from '../App'
import { bgTypeColors } from '../data/typeColors'

const PokemonCard = ({pokemon}) => {

    const { setSelectedCard } = useContext(AppContext);

    const getSelectedPokemon = (selectedPokemon) => {
        return pokemonData.filter(poke => poke.id === selectedPokemon['id']);
    }

    const selectedPokemon = getSelectedPokemon(pokemon);
    const pokemonType = selectedPokemon[0]['types'][0]['type']['name'];

    console.log(pokemonType)


    return (
        <div className='pokemon-card' onClick={() => setSelectedCard(pokemon.id)}>   
            <div className="backing-circle" style={{backgroundColor: `${bgTypeColors[pokemonType]}`}}>
                <img src={pokemon.sprites['other']['home']['front_default']} alt=""/>
            </div>
            <div>{pokemon.name}</div>
        </div>
    )
}

export default PokemonCard