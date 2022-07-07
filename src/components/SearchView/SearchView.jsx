import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import './SearchView.css'

const SearchView = () => {
  return (
    <div className='search-view-container'>
        <div className="message">
            There is currently no Pokemon selected. Please select a Pokemon from the list or use the search tool below.
        </div>

        <SearchForm />
    </div>
  )
}

export default SearchView