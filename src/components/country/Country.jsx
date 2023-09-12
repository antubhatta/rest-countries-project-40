import { useState } from 'react';
import './Country.css'
import CountryDetail from '../country_Detail/CountryDetail';
export default function Country({country,handleVisitedCountry,handleVisitedFlag}){
    // console.log(country)
    const {name,flags,capital,population,area,cca3}= country;
    const [visited,setVisited]=useState(false)
    const handleAdd=()=>{
        setVisited(!visited)
    }
    // console.log(handleVisitedFlag)
    
    return (
        <div className={`country ${visited ? 'visited':'non-visited'}`}>
            <h4 style={{color:visited ? 'purple':'white'}}>Country Name: {name?.common}</h4>
            <img src={flags.png} alt="" />
            <p>Capital:{capital}</p>
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p>Code:{cca3}</p>
            <button onClick={()=>handleVisitedFlag(country.flags.png)}>Visited Flag</button><br />
            <button onClick={()=>handleVisitedCountry(country)}>Mark as Visited</button><br></br>
            
            <button onClick={handleAdd}>{visited ? 'Visited' :'Going'}</button>
            {visited ? 'I am visited this country': 'I want to visit'}
            <hr />
            <CountryDetail
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
            
            >
                
            </CountryDetail>
            
        </div>
    )
}