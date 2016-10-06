import React from 'react'
import WRThumbnail from './wr_thumbnail'
import TwitchThumbnail from './twitch_thumbnail'

class SideBar extends React.Component {
    constructor(props){
        super(props)

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

    // twitchInAppLinks(){
    //     const twitchInAppLinks = this.props.streamVideos.map((video, i)=>{
    //      return (
    //        <div className='row'>
    //        <TwitchThumbnail video={video} key={i}/>
    //      </div>)
    //    })
    //     return twitchInAppLinks
    //  }
                // {this.twitchInAppLinks()
    render(){
        return (
            <div className='pull-right' style={{padding: '180px 30px 4cm 0px'}}>
                {this.wrInAppLinks()}
}
            </div>
        )
    }
}

export default SideBar
// {this.props.wrVideos.map((video, i) => <WRThumbnail video={video} key={i}/>) }
