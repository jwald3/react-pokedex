import React, { useContext } from 'react'
import { AppContext } from '../../App'
import './SearchBar.css'
import Search from '../Search/Search'

const SearchBar = () => {
    const { searchQuery, setSearchQuery } = useContext(AppContext);

    return (
        <div className='search-container'>
            <Search termQuery={searchQuery} termQuerySetter={setSearchQuery} />
        </div>
    )
}

export default SearchBar