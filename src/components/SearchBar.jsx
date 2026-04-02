import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router-dom'

function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (event )=>{
        event.preventDefault();

        if(searchTerm){Navigate(`search/${searchTerm}`)
        
        setSearchTerm("")}
    
    }
    return (
        <form className="Paper-SearchBar" onSubmit={handleSubmit}>
            <input className='Search-Bar'
            onSubmit={handleSubmit}
            value ={searchTerm}
            placeholder='Search...'
            onChange={(e)=>{setSearchTerm(e.target.value)}}/>

            <button className="SearchButton-SearchBar" type='submit'><FaSearch/></button>
            </form>
    
        
    )
}

export default SearchBar
