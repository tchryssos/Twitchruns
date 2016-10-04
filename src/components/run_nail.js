import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class RunNail extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {videos: this.props.actions.fetchWrVideos().payload, streams: this.props.actions.fetchStreams().payload}
    }

    // fetchWrVideos(){
    //   const allVideos = this.props.actions.fetchWrVideos().payload
    //   this.setState(videos: allVideos)
    // }

    render(){
        return(
            <div>
                <div id="category-1-wr-vid">
                    {this.state.videos.firstCat.name} :
                    <br/>
                    <img src={this.state.videos.firstCat.thumbnail} role="presentation"/>
                </div>

                <div id="category-2-wr-vid">
                    {this.state.videos.secondCat.name} :
                    <br/>
                    <img src={this.state.videos.secondCat.thumbnail} role="presentation"/>
                </div>

                <div id="category-3-wr-vid">
                    {this.state.videos.thirdCat.name} :
                    <br/>
                    <img src={this.state.videos.thirdCat.thumbnail} role="presentation"/>
                </div>    

                <div id="twitch-stream-1">
                    "twitchstream1"
                </div>

                <div id="twitch-stream-2">
                    "twitchstream2"
                </div>

            </div>
        )
    }
    
}


function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

 const componentCreator = connect(null, mapDispatchToProps)
 export default componentCreator(RunNail)



