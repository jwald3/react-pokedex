import React, { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from '../../App'
import './SearchBar.css'

const SearchBar = () => {

    const { searchQuery, setSearchQuery } = useContext(AppContext);

    const updateQuery = (val) => {
        setSearchQuery(val)
    }

    const clearInput = () => {
        setSearchQuery("")
    }

    return (
        <div className='search-container'>
            <div className="inputs">
                <input className='search-input' type='text' value={searchQuery} placeholder='Search for a Pokemon...' onChange={(e) => updateQuery(e.target.value)}/>
                <div className="filter-close-icon">
                    {searchQuery === "" ? "" : <CloseIcon id='clear-btn' onClick={clearInput}/>}
                </div>
            </div>
        </div>
    )
}

export default SearchBar