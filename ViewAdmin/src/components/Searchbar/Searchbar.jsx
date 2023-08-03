import React from 'react'
import './Searchbar.css'
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  return (
    <div className='divSearch'>
        <input className='searchbar' type="search" placeholder='Search' />
        <SearchIcon/>
    </div>
  )
}

export default Searchbar