import React from 'react';
import {Link} from 'react-router'

export default function HomeLink(props){
  return (
    <div className="row">
      <div className="col-md-4" style={{float:"left"}}>
        <Link to='/'> Twitchruns </Link>
      </div>
    </div>
  )
}
