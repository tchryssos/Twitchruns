import '../styles/search_bar.css'
import React from 'react';

export default function SearchBar(props){
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-md-offset-3">
                <form action="" className="search-form">
                    <div className="form-group has-feedback">
                		<label htmlFor="search" className="sr-only">Search</label>
                		<input type="text" className="form-control" name="search" id="search" placeholder="search"/>
                  		<span className="glyphicon glyphicon-search form-control-feedback"></span>
                	</div>
                </form>
            </div>
        </div>
    </div>)
  }
