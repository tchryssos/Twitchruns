import React from 'react'
import WRThumbnail from './wr_thumbnail'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

class SideBar extends React.Component {
    constructor(props){
        super(props)
        this.twitchStreamEmbeds=this.twitchStreamEmbeds.bind(this)
    }

    twitchStreamEmbeds(){
      if (this.props.stream1 !== "none"){
        const twitchBaseUrl1=`http://player.twitch.tv/?channel=${this.props.stream1["channel"]["name"]}`
        const twitchBaseUrl2=`http://player.twitch.tv/?channel=${this.props.stream2["channel"]["name"]}`

        return(
          <div>
            <div id="twitch-1" >
              <iframe
                src={twitchBaseUrl1}
                height="101"
                width="180"
                frameborder="0"
                scrolling="no"
                muted="true">
              </iframe>
              <div className='row' >
                <button className='btn btn-danger btn-xs' onClick={()=>{this.props.stream(twitchBaseUrl1)}} >Watch</button>
              </div>
            </div>

            <div id="twitch-2" >
              <iframe
                src={twitchBaseUrl2}
                height="101"
                width="180"
                frameborder="0"
                scrolling="no"
                muted="true"
                allowfullscreen="true">
              </iframe>
              <div className='row' >
                <button className='btn btn-danger btn-xs' onClick={()=>{this.props.stream(twitchBaseUrl2)}} >Watch</button>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div>
            <h2>No Active Streams</h2>
          </div>
        )
      }
    }

     render(){
      return (
      <div className='pull-right' style={{padding: '180px 30px 4cm 0px'}}>
        <div className="row"><WRThumbnail stream={this.props.stream} run={this.props.wrVideos[1]} gameArt={this.props.gameArt}/></div>
        <div className="row"><WRThumbnail stream={this.props.stream} run={this.props.wrVideos[2]} gameArt={this.props.gameArt}/></div>
        <div className="row"><WRThumbnail stream={this.props.stream} run={this.props.wrVideos[3]} gameArt={this.props.gameArt}/></div>
        {this.twitchStreamEmbeds()}
      </div>
    )}
}

function mapStateToProps(state, ownProps){
  debugger
  if (state.streams.length >0){
    let stream1=state.streams[0]
    let stream2=state.streams[1]

    return {stream1: stream1, stream2: stream2}
  } else {
    return {stream1: "none", stream2: "none"}
  }
}

 const componentCreator = connect(mapStateToProps)
 export default componentCreator(SideBar)
// {this.props.wrVideos.map((video, i) => <WRThumbnail video={video} key={i}/>) }
