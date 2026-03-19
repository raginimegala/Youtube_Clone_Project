import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'



function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSubmit = (event )=>{
        event.preventDefault();
    
    }
    return (
        <form className="Paper-SearchBar" onSubmit={handleSubmit}>
            <input className='Search-Bar'
            value ={searchTerm}
            placeholder='Search...'
            onChange={(e)=>{setSearchTerm(e.target.value)}}/>

            <button className="SearchButton-SearchBar" type='submit'><FaSearch/></button>
            </form>
    
        
    )
}

export default SearchBar
