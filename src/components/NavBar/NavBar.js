import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'



const NavBar = ({onSearch}) =>{
    
    return (
        <div className='nav'>
            <Link className="link-detail" to="/">
                <span>inicio</span>
            </Link>
            <Link className="link-detail" to="/about">
                <span>about</span>
            </Link>
            <SearchBar onSearch={onSearch}/>
            
            
        </div>
    )
}

export default NavBar;