import React from 'react'

import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import SideBar from './side_bar'
import SelectedStream from './selected_stream'

class RunStream extends React.Component{

  constructor(props){
    super(props)
    this.state = {video: this.props.run, videoUrl: this.props.run.run_url }
  }

  showStream(newStream){
    this.setState({videoUrl: newStream})
  }

  setVideo(){
    if(!this.state.videoUrl.includes('channel')){
      this.setState({videoUrl: this.props.run.run_url})
    }
  }

  render(){
    this.props.actions.fetchTwitchStreams(this.props.run)
    return(
      <div className="run-stream">
        <SelectedStream run={this.props.run} runUrl={this.state.videoUrl}/>
        <SideBar stream={this.showStream.bind(this)} wrVideos={this.props.run.category_leaderboard.placement_list} gameArt={this.props.run.game.artwork_url}/>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  let stream1=null
  let stream2=null
  let run=null

  if (state.streams.length >0){
    stream1=state.streams[0]
    stream2=state.streams[1]

  } else {
    stream1="none"
    stream2="none"
  }

  if (state.runs.original){
  run = state.runs.original.find((run) => {return run.id == ownProps.params.id})
  }
  else{
    run=
      {run: {
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

              1: {id: 1},
              2: {id: 2},
              3: {id: 3},
            }
          }
        }}
  }
  return {run: run, stream1: stream1, stream2:stream2}
}
function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

 const componentCreator = connect(mapStateToProps, mapDispatchToProps)
 export default componentCreator(RunStream)
