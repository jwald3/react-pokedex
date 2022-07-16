import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './Search.css'

const Search = ({ termQuery, termQuerySetter }) => {

    const updateQuery = (val) => {
        termQuerySetter(val);
    }

    const clearInput = () => {
        termQuerySetter("");
    }


    return (
        <div className="inputs">
            <div className="search-icon">
                <SearchIcon /> 
            </div>
            <input className='search-input' type='text' value={termQuery} placeholder='Search for a Pokemon...' onChange={(e) => updateQuery(e.target.value)}/>
            <div className="close-icon">
                {termQuery === "" ? "" : <CloseIcon id='clear-btn' onClick={clearInput}/>}
            </div>
        </div>
    )
}

export default Search