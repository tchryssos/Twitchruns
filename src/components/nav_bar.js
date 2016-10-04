import React from 'react';
import SearchBar from './search_bar'
import RunNail from './run_nail'
// import {Link} from 'react-router'

export default function NavBar(props){
  return (
    <nav className='navbar navbar-inverse'>
      <SearchBar/>
      <RunNail />
    </nav>
  )
}
