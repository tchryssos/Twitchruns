import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class WRThumbnail extends React.Component {

    constructor(props){
        super(props)


        // this.set.setCurrentVid() = this.setCurrentVid().bind(this)
        // debugger
    }

    setCurrentVid(url){
        this.props.actions.setCurrentVideo(url)
    }

    youtubeThumbnailUrl(url){
      return `http://img.youtube.com/vi/${url.substr(32,20)}/1.jpg`
    }

    render(){
        return(
            <div className="pull-right">
                <div>
                      <Link to={`/runs/${this.props.run.id}`}><img src={this.youtubeThumbnailUrl(this.props.run["run_url"])} role="presentation"/></Link>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
   return {actions: bindActionCreators(actions, dispatch)}
}

 const componentCreator = connect(null, mapDispatchToProps)
 export default componentCreator(WRThumbnail)
