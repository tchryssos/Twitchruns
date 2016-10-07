import React from 'react'
import WRThumbnail from './wr_thumbnail'
import TwitchThumbnail from './twitch_thumbnail'
import {connect} from 'react-redux'

class SideBar extends React.Component {
    constructor(props){
        super(props)
        this.wrInAppLinks=this.wrInAppLinks.bind(this)
        this.twitchStreamEmbeds=this.twitchStreamEmbeds.bind(this)
    }

     wrInAppLinks(){
       return (
        <div>
          <div className="row"><WRThumbnail run={this.props.wrVideos[1]}/></div>
          <div className="row"><WRThumbnail run={this.props.wrVideos[2]}/></div>
          <div className="row"><WRThumbnail run={this.props.wrVideos[3]}/></div>
        </div>
       )
     }


     twitchStreamEmbeds(){
       if (this.props.stream1 != "none"){
         const twitchBaseUrl1=`http://player.twitch.tv/?channel=${this.props.stream1["channel"]["name"]}`
         const twitchBaseUrl2=`http://player.twitch.tv/?channel=${this.props.stream2["channel"]["name"]}`

         return(
           <div>
             <div id="twitch-1">
               <iframe
                src={twitchBaseUrl1}
                height="101"
                width="180"
                frameborder="0"
                scrolling="no"
                allowfullscreen="true">
              </iframe>
             </div>
             <div id="twitch-2">
             <iframe
              src={twitchBaseUrl2}
              height="101"
              width="180"
              frameborder="0"
              scrolling="no"
              allowfullscreen="true">
            </iframe>
             </div>
           </div>
         )
       } else {
         return (
           <div>
             <h1>NO STREAMS YET</h1>
           </div>
         )
       }
     }
    render(){
        return (
            <div className='pull-right' style={{padding: '180px 30px 4cm 0px'}}>
                {this.wrInAppLinks()}
                {this.twitchStreamEmbeds()}
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
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
