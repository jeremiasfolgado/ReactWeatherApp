import React from 'react'

const CityDetail = ({city}) =>{
    console.log(city)
    return (
        <div>
            <h4>{city.name}</h4>
            <span></span>
        </div>
    )
}

export default CityDetail;