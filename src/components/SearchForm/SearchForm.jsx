import React, { useContext, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { pokemonData } from '../../data/pokemon'
import { AppContext } from '../../App'
import './SearchForm.css'

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const {setSelectedCard} = useContext(AppContext)

    const handleFilter = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        const newFilter = pokemonData.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(term.toLowerCase());
        });
        if (term === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([])
        setSearchTerm("")
    }

    return (
        <div className="search-form-container">
            <div className='search'>
                <div className="search-inputs">
                    <input type='text' placeholder="Please enter a Pokemon's name..." value={searchTerm} onChange={handleFilter}/>
                    <div className="search-icon">
                        {filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id='clear-btn' onClick={clearInput}/>}
                    </div>
                </div>
                { filteredData.length > 0 &&
                    <div className="data-result">
                    {
                        filteredData.slice(0, 15).map((value, key) => {
                            return <div className="pokemon-option" key={key} onClick={() => setSelectedCard(value.id)}>{value.name}</div>
                        })
                    }
                </div>
                }
            </div>
        </div>
    )
}

export default SearchForm;