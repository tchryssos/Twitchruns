import React from 'react';
import SearchBar from './search_bar'
// import {Link} from 'react-router'

export default function NavBar(props){
  return (
    <nav className='navbar navbar-inverse'>
      <SearchBar/>
    </nav>
  )
}
