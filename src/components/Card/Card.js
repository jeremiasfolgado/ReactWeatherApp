import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({city, onClose}) =>{
    console.log(onClose)
    return (
        <div>
            <h4>{city.name}</h4>
            <button onClick={()=> onClose(city.id)} >quit </button>
            <Link to={`/city/${city.id}`}>more details</Link>
        </div>
    )
}

export default Card;