import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './SearchBar.css'

const SearchBar = () => {

    const { setSearchQuery } = useContext(AppContext);

    const updateQuery = (val) => {
        setSearchQuery(val)
    }

    return (
        <div className='search-container'>
            <input className='search-input' type='text' placeholder='Search for a Pokemon...' onChange={(e) => updateQuery(e.target.value)}/>
        </div>
    )
}

export default SearchBar