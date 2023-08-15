import React from 'react'
import TopNavbar from '../components/TopNavbar'
import LinkButton from '../components/LinkButton'
import { Typography } from '@mui/material'
import "../Style/style.css"

const CountryDetails = () => {
  return (
    <div>
        <TopNavbar/>
        <LinkButton/>
        <div className='detailsContainer'>
            <img src='#' width="300px" height="200px"/>
            <div>
                <Typography h3 >Belgium</Typography>
                <div>
                    <div>
                        <Typography>Native Name:</Typography>
                        <Typography>Population:</Typography>
                        <Typography>Region:</Typography>
                        <Typography>Sub Region:</Typography>
                        <Typography>Capital:</Typography>
                    </div>
                    <div>
                        <Typography>Top Level Domain:</Typography>
                        <Typography>Currencies:</Typography>
                        <Typography>Languages:</Typography>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountryDetails