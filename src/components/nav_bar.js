import React from 'react';
import SearchBar from './search_bar'
import {Link} from 'react-router'

export default function NavBar(props){
  return (
    <div>
      <nav className='navbar'>
        <Link to='/'><img src="http://i.imgur.com/c2EDVTb.png" width="400px"/></Link>
        <SearchBar/>
      </nav>
    </div>
  )
}
