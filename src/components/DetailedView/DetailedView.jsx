import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../App'
import { pokemonData } from '../../data/pokemon'
import '../../App.css'
import StatChart from '../StatChart/StatChart'
import PokemonTypes from '../PokemonTypes/PokemonTypes'
import NavigationBar from '../NavigationBar/NavigationBar'
import SearchView from '../SearchView/SearchView'
import './DetailedView.css'
import PokemonBlurb from '../PokemonBlurb/PokemonBlurb'
import EvolutionChain from '../EvolutionChain/EvolutionChain'

const DetailedView = () => {
    const { selectedCard, pokemonObject, setPokemonObject } = useContext(AppContext);

    const getSelectedPokemon = (selectedPokemon) => {
        return pokemonData.filter(poke => poke.id === selectedPokemon);
    }

    useEffect(() => {
        if (selectedCard !== 0) {
            const selectedPokemon = getSelectedPokemon(selectedCard);
            setPokemonObject(selectedPokemon);
        } else {
            setPokemonObject(null)
        }
    }, [selectedCard])

    return (
        <div className='detailed-view'>{
            (pokemonObject && 
                (<div>
                    <NavigationBar />
                    <div className="bio-container">
                        <div className='pokemon-name'>{pokemonObject[0].name}</div>
                        <img src={pokemonObject[0].sprites['other']['home']['front_default']} alt="" />
                        <PokemonBlurb />
                    </div>
                    <div className="attributes-container">
                        <PokemonTypes types={pokemonObject[0]['types']}/>
                        <StatChart stats={pokemonObject[0].stats}/>
                    </div>
                </div>)) || 
                (<div>
                    <SearchView />
                </div>)
        }</div>
    )
}

export default DetailedView