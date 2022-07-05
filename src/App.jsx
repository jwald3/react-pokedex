import { createContext, useState } from "react";
import "./App.css";
import AllPokemon from "./components/AllPokemon/AllPokemon";
import BrowseInterface from "./components/BrowseInterface/BrowseInterface";
import DetailedView from './components/DetailedView/DetailedView'
import { pokemonData } from './data/pokemon';

export const AppContext = createContext();

const App = () => {

    const [selectedCard, setSelectedCard] = useState(0);
    const [pokemonObject, setPokemonObject] = useState(null);

    return ( 
        <div className="App">
            <AppContext.Provider
                value={{
                    selectedCard,
                    setSelectedCard,
                    pokemonObject,
                    setPokemonObject
                }}
            >
                <BrowseInterface />
                <DetailedView />
            </AppContext.Provider>
        </div>
    );
};

export default App;
