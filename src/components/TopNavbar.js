import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import "../Style/style.css";

const TopNavbar = () => {
  return (
    <div className='navBarContainer'>
        <h3>Where in the world?</h3>
        <div className='darkModeContainer'>
            <DarkModeIcon sx={{marginTop:"20px",marginRight:"10px",fontSize:"18px"}}/>
            <p>Dark Mode</p>
        </div>
    </div>
  )
}

export default TopNavbar