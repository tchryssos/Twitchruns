import React from 'react';
import * as actions from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Link} from 'react-router'

class FeaturedVideo extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Link to={`/runs/${this.props.runId}`}>
       <div className='col-md-2' >
        <img src={this.props.picUrl} />
       </div>
       </Link>

   )

  }
}


function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}


const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(FeaturedVideo);
