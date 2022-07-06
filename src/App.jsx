import { createContext, useState } from "react";
import "./App.css";
import BrowseInterface from "./components/BrowseInterface/BrowseInterface";
import DetailedView from './components/DetailedView/DetailedView'

export const AppContext = createContext();

const App = () => {

    const [selectedCard, setSelectedCard] = useState(0);
    const [pokemonObject, setPokemonObject] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    return ( 
        <div className="App">
            <AppContext.Provider
                value={{
                    selectedCard,
                    setSelectedCard,
                    pokemonObject,
                    setPokemonObject,
                    searchQuery,
                    setSearchQuery
                }}
            >
                <BrowseInterface />
                <DetailedView />
            </AppContext.Provider>
        </div>
    );
};

export default App;
