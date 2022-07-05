import { createContext, useState } from "react";
import "./App.css";
import AllPokemon from "./components/AllPokemon";
import DetailedView from './components/DetailedView'
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
                <AllPokemon pokemon={pokemonData} />
                <DetailedView />
            </AppContext.Provider>
        </div>
    );
};

export default App;
