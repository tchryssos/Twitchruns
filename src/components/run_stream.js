import React from 'react'

import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import SideBar from './side_bar'
import SelectedStream from './selected_stream'

class RunStream extends React.Component{

  constructor(props){
    super(props)
    this.state = {videos: this.props.run, streams: this.props.actions.fetchStreams().payload }
  }

  render(){
    return(
      <div>
        <SelectedStream run={this.props.run}/>
        <SideBar wrVideos={this.props.run.category_leaderboard.placement_list} streamVideos={this.state.streams}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  if (state.runs.length > 0){
  const run = state.runs.find((run) => {return run.id == ownProps.params.id})
  const runner = state.runners.find((runner)=> {return runner.id == run.runner_id})
  return {run: run, runner: runner}
  }
  else{
    return {run: {
              speedrun_id: "",
              id: 1,
              run_url:"pk=pq",
              runner_id: 1,
              run_placement: {
name: "Super Mario 64",
category: "120 Star",
place: 1
},
              runner: {
                  username: "cheese05",
                  id: 1,
                  stream_url: "https://www.twitch.tv/cheese05",
                  twitch_id: null},
              game: {
    name: "Super Mario 64",
    id: 1,
    artwork_url: "http://www.mobygames.com/images/covers/l/216304-super-mario-64-nintendo-64-front-cover.jpg"
    },
    category_leaderboard: {
    title: "120 Star",
    rules: "Complete the game while collecting every star. No restrictions. All forms of BLJ are allowed. Timing starts from reset and ends when the big star is collected at the end of the game.",
    placement_list: {
    1: "8m73rgwy",
    2: "1zqjp35m",
    3: "3",
    }
    }
                }}
  }}
function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

 const componentCreator = connect(mapStateToProps, mapDispatchToProps)
 export default componentCreator(RunStream)
