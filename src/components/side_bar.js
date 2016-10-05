import React from 'react'
import WRThumbnail from './wr_thumbnail'
import TwitchThumbnail from './twitch_thumbnail'

class SideBar extends React.Component {
    constructor(props){
        super(props)

    }

     wrInAppLinks(){
        const wrInAppLinks = this.props.wrVideos.map((video, i)=>
         (<div className='row'><WRThumbnail video={video} key={i}/></div>)
        )
        return wrInAppLinks
     }

    twitchInAppLinks(){
        const twitchInAppLinks = this.props.streamVideos.map((video, i)=>{
         return (
           <div className='row'>
           <TwitchThumbnail video={video} key={i}/>
         </div>)
       })
        return twitchInAppLinks
     }

    render(){
        return (
            <div className='pull-right' style={{padding: '30px 30px 4cm 0px'}}>
                {this.wrInAppLinks()}
                {this.twitchInAppLinks()}
            </div>
        )
    }
}

export default SideBar
// {this.props.wrVideos.map((video, i) => <WRThumbnail video={video} key={i}/>) }
