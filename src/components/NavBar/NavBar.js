import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'



const NavBar = ({onSearch}) =>{
    console.log("en nav", onSearch)
    return (
        <div className='nav'>
            <Link to="/">
                <span>inicio</span>
            </Link>
            <Link to="/about">
                <span>about</span>
            </Link>
            <SearchBar onSearch={onSearch}/>
            
            
        </div>
    )
}

export default NavBar;