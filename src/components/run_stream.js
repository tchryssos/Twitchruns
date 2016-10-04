import React from 'react'

import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import SideBar from './side_bar'
import SelectedStream from './selected_stream'

class RunStream extends React.Component{

  constructor(props){
    super(props)
    this.state = {videos: this.props.actions.fetchWrVideos().payload, streams: this.props.actions.fetchStreams().payload }
  }

  render(){
    return(
      <div>
        <SideBar wrVideos={this.state.videos} streamVideos={this.state.streams}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

 const componentCreator = connect(null, mapDispatchToProps)
 export default componentCreator(RunStream)


