import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './SearchBar.css'

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
        <form onSubmit={e=>handleSubmit(e)} className="form">
            <input className="input-city" type='text' placeholder=' ciudad...' value={cityName} onChange={e => setCityName(e.target.value)} />
            <button className="add" type='submit' value="Add">Agregar</button>

        </form>
    )
}

export default SearchBar;