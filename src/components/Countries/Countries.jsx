import { useEffect, useState } from "react"
import Country from "../country/country"
import './Countries.css'

export default function Countries(){
    const [countries,setCountries]=useState([])
    // const [visitedCountries,setVisitedCountries]=useState([])
    const [visitedCountries,setVisitedCountries]=useState([])
    const [visitedFlag,setVisitedFlag]= useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
    
    const handleVisitedCountry=(country)=>{
        // console.log('add to your visited this country')
        // console.log(country)
        const newVisitedCountries=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlag=(flag)=>{
        console.log('clicked the btn')
        const newVisitedFlag=[...visitedFlag,flag]
        setVisitedFlag(newVisitedFlag)
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className="flag-container">
               {
               visitedFlag.map((flag,idx)=><img key={idx} src={flag}></img>)
               }
            </div>
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            
            <div className="countries">
            {
                countries.map(countries=><Country key={countries.cca2}
                    handleVisitedFlag={handleVisitedFlag}
                    handleVisitedCountry={handleVisitedCountry}
                    country={countries}></Country>)
            }
            </div>
        </div>
    )
}
