import CountryData from "../countryData/countryData";

const CountryDetail = ({country,handleVisitedCountry,handleVisitedFlag}) => {
    return (
        <div>
            <h3>Country Details</h3>
         <hr />
         <CountryData  
         country={country}
        handleVisitedCountry={handleVisitedCountry}
        handleVisitedFlag={handleVisitedFlag}
         >
           

         </CountryData>
        </div>
    );
};

export default CountryDetail;