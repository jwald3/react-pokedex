import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'
import { pokemonData } from '../data/pokemon'
import '../App.css'
import StatChart from './StatChart'
import PokemonTypes from './PokemonTypes'
import NavigationBar from './NavigationBar'
import SearchView from './SearchView'

const DetailedView = () => {
    const { selectedCard, pokemonObject, setPokemonObject } = useContext(AppContext);

    const getSelectedPokemon = (selectedPokemon) => {
        return pokemonData.filter(poke => poke.id === selectedPokemon);
    }

    useEffect(() => {
        if (selectedCard !== 0) {
            const selectedPokemon = getSelectedPokemon(selectedCard);
            setPokemonObject(selectedPokemon);
        }
    }, [selectedCard])

    return (
        <div className='detailed-view'>{
            (pokemonObject && 
                (<div>
                    <NavigationBar />
                    <div>{pokemonObject[0].name}</div>
                    <img src={pokemonObject[0].sprites['other']['home']['front_default']} alt="" />
                    <PokemonTypes types={pokemonObject[0]['types']}/>
                    <StatChart stats={pokemonObject[0].stats}/>
                </div>)) || 
                (<div>
                    <SearchView />
                </div>)
        }</div>
    )
}

export default DetailedView