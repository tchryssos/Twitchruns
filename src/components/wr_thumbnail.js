import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

class WRThumbnail extends React.Component {

    constructor(props){
        super(props)
        // this.set.setCurrentVid() = this.setCurrentVid().bind(this)
        this.thumbnailUrl=this.thumbnailUrl.bind(this)
    }

    thumbnailUrl(run){
      if (run.thumbnail === "none"){
        return this.props.gameArt
      } else {
        return run.thumbnail
      }
    }


    render(){
        return(
            <div className="pull-right">
                <div>
                    <Link to={`/runs/${this.props.run.id}`}><img onClick={()=>{this.props.stream(this.props.run.run_url)}} src={this.thumbnailUrl(this.props.run)} role="presentation" width="180" style={{marginBottom: '20px', marginRight: '80px', marginLeft:"80px"}}/></Link>
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
