import React from 'react';
import SearchBar from './search_bar'
import {Link} from 'react-router'

export default function NavBar(props){
  return (
    <nav className='navbar navbar-inverse'>
      <div style={{float: 'left'}}>
        <h3><Link to='/'>Browse Twitch Runs</Link></h3>
      </div>
      <SearchBar/>
    </nav>
  )
}
