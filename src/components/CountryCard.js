import React from 'react';
import { Card,CardMedia,CardContent,Typography } from '@mui/material';

const CountryCard = ({imageSrc,country,population,region,capital}) => {
  return (
    <Card sx={{ width: 200,marginTop:"50px",marginRight:"10px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {imageSrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {country}
        </Typography>
        <div>
        <Typography variant="body2" color="text.secondary">
          <strong>Region:</strong> {region}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <strong>Population:</strong>  {population}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Capital:</strong> {capital}
        </Typography>
        </div>
        
      </CardContent>
     
    </Card>
  )
}

export default CountryCard