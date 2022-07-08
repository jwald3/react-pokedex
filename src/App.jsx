import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import "./App.css";
import BrowseInterface from "./components/BrowseInterface/BrowseInterface";
import DetailedView from './components/DetailedView/DetailedView'

export const AppContext = createContext();

const App = () => {

    const [selectedCard, setSelectedCard] = useState(0);
    const [pokemonObject, setPokemonObject] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [speciesData, setSpeciesData] = useState({flavor_text_entries: [
        {
            flavor_text: "",
            language: {
                name: "en"
            }
        }
    ]});

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon-species/${selectedCard}`)
        .then(response => setSpeciesData(response.data));
    }, [selectedCard])


    return ( 
        <div className="App">
            <AppContext.Provider
                value={{
                    selectedCard,
                    setSelectedCard,
                    pokemonObject,
                    setPokemonObject,
                    searchQuery,
                    setSearchQuery,
                    speciesData
                }}
            >
                <BrowseInterface />
                <DetailedView />
            </AppContext.Provider>
        </div>
    );
};

export default App;
