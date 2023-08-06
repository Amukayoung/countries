import React from 'react';
import TopNavbar from '../components/TopNavbar';
import Search from '../components/Search';
import "../Style/style.css";
import Select from '../components/SelectRegions';
import CountryCard from '../components/CountryCard';
import Data from "../MockData/data.json";




const Home = () => {
    console.log(Data);
  return (
    <div> 
        <TopNavbar/>
        <div className='searchFilterContainer'>
            <Search/>
            <Select/>
        </div>
        <div className='countryCardContainer'>
            {Data.map((countryDetails,index)=>( 
            <CountryCard 
            country = {countryDetails.name}
            imageSrc={countryDetails.flag}
             population={countryDetails.population}
             region={countryDetails.region}
             capital={countryDetails.capital}
             />))}
        </div>
    </div>
  )
}

export default Home