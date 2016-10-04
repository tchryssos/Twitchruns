import React from 'react'
import WRThumbnail from './wr_thumbnail'
import TwitchThumbnail from './twitch_thumbnail'

class SideBar extends React.Component {
    constructor(props){
        super(props)

    }

     wrInAppLinks(){
        const wrInAppLinks = this.props.wrVideos.map((video, i)=>
         (<WRThumbnail video={video} key={i}/>)
        )
        return wrInAppLinks
     }

    twitchInAppLinks(){
        const twitchInAppLinks = this.props.streamVideos.map((video, i)=>
         (<TwitchThumbnail video={video} key={i}/>)
        )
        return twitchInAppLinks
     }

    render(){
        return (
            <div>
                {this.wrInAppLinks()}
                {this.twitchInAppLinks()}
            </div>
        )
    }
}

export default SideBar
// {this.props.wrVideos.map((video, i) => <WRThumbnail video={video} key={i}/>) }
