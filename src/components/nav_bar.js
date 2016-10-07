import React from 'react';
import SearchBar from './search_bar'
import {Link} from 'react-router'
import HomeLink from './home_link'

export default function NavBar(props){
  return (
    <nav className='navbar navbar-inverse'>
      <HomeLink/>
      <SearchBar/>
    </nav>
  )
}
