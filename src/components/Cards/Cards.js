import React from 'react'
import Card from '../Card/Card'
import './Cards.css'

const Cards = ({cities, onClose}) =>{
    
    return (
        <div className="cards-container">
            {cities && cities.map(city => <Card key={city.id} city={city} onClose={onClose}/>)}
        </div>
    )
}

export default Cards;