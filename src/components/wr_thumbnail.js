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

    thumbnailUrl(run){

        if (run.run_url.includes("youtube")) {
            const endpoint = 'http://img.youtube.com/vi/' + run.run_url.split('=')[1] + '/1.jpg'
            return endpoint
        }
        else {
            const endpoint = this.props.gameArt
            return endpoint
         }
        }


    render(){

        return(
            <div className="pull-right">
                <div>
                      <Link to={`/runs/${this.props.run.id}`}><img src={this.thumbnailUrl(this.props.run)} role="presentation" height="100" width="180"  style={{marginBottom: "20px"}}/></Link>
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
