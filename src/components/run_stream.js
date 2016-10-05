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
    debugger
  }

  render(){

    return(

      <div>
        <SelectedStream run={this.props.run}/>
        <SideBar wrVideos={this.state.videos} streamVideos={this.state.streams}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  if (state.runs.length > 0){
  const run = state.runs.find((run) => {return run.id == ownProps.params.id})
  return {run: run}
  }
  else{
    return {run: {
              speedrun_id: "",
              id: 1,
              run_url:"pk=pq",
              runner_id: 1}}
  }

}
function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

 const componentCreator = connect(mapStateToProps, mapDispatchToProps)
 export default componentCreator(RunStream)
