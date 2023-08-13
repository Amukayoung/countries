import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Typography } from '@mui/material';
import "../Style/style.css";
import { Link } from 'react-router-dom';

const LinkButton = () => {
  return (
    <Link to={'/'} className='linkButton'>
        <KeyboardBackspaceIcon/>
        <Typography >Back</Typography>
    </Link>
  )
}

export default LinkButton