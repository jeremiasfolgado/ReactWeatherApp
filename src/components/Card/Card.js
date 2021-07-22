import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'

const Card = ({city, onClose}) =>{
    console.log(city)
    return (
        <div className="card">
            <div className="row-one">
                <span>{city.temp}°</span>    
                <img src={`https://openweathermap.org/img/wn/${city.icon}@2x.png`} alt="weather icon"></img>
            </div>
            <div className="row-two">
                <h4>{city.name}</h4>
            </div>
            <div className="row-three">
                <div className="min-max">
                    <span>min</span>
                    <span>{city.min} °</span>
                </div>
                <div className="min-max">
                    <span>max</span>
                    <span>{city.max} °</span>
                </div>
            </div>
                    

            <div className="call-to-action" >
                <Link className="link-detail" to={`/city/${city.id}`}>
                    <div className='button' >
                        Más info
                    </div>
                </Link>

                <div className="button" onClick={()=> onClose(city.id)} >quit </div>
                    
                    
            </div>

        </div>
    )
}

export default Card;