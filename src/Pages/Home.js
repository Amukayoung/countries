import React from 'react';
import TopNavbar from '../components/TopNavbar';
import Search from '../components/Search';
import "../Style/style.css";
import Select from '../components/SelectRegions';

const Home = () => {
  return (
    <div> 
        <TopNavbar/>
        <div className='searchFilterContainer'>
            <Search/>
            <Select/>
        </div>
    </div>
  )
}

export default Home