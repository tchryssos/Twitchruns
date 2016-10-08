import '../styles/search_bar.css'
import React from 'react';
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class SearchBar extends React.Component{
  // constructor(props){
  //   super(props)
  // }

  searchRuns(){
    this.props.actions.filterRuns(this.refs.searchTerm.value)
  }


  render(){return (
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-md-offset-3" style={{float: 'right'}}>
                <form action="" className="search-form">
                    <div className="form-group has-feedback">
                		<label htmlFor="search" className="sr-only">Search</label>
                		<input type="text" className="form-control" name="search" ref='searchTerm' onChange={()=>{this.searchRuns()}} id="search" placeholder="search"/>
                  		<span className="glyphicon glyphicon-search form-control-feedback"></span>
                	</div>
                </form>
            </div>
        </div>
    </div>)
  }}

  function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)}
  }


  const componentCreator = connect(null, mapDispatchToProps)
  export default componentCreator(SearchBar);
