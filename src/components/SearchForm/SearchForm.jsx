import React, { useContext, useEffect, useState } from 'react'
import { pokemonData } from '../../data/pokemon'
import { AppContext } from '../../App'
import './SearchForm.css'
import Search from '../Search/Search';

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const {setSelectedCard} = useContext(AppContext)
    

    useEffect(() => {
        const newFilter = pokemonData.filter((pokemon) => {
            return pokemon.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
        if (searchTerm === "") {
            setFilteredData([])
        } else {
            setFilteredData(newFilter);
        }
    }, [searchTerm])


    return (
        <div className="search-form-container">
            <div className='search'>
                <Search termQuery={searchTerm} termQuerySetter={setSearchTerm}/>
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