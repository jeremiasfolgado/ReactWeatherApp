import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchBar = ({onSearch}) =>{
    const [cityName, setCityName] = useState('')
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault();
        onSearch(cityName);
        setCityName('');
        history.location.pathname !== '/' && history.push('/')
    }

    return (
        <form onSubmit={e=>handleSubmit(e)}>
            <input type='text' placeholder='Type here...' value={cityName} onChange={e => setCityName(e.target.value)} />
            <input type='submit' value="Add"/>

        </form>
    )
}

export default SearchBar;