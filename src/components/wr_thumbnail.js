import React from 'react'
import * as actions from '../actions'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class WRThumbnail extends React.Component {
    
    constructor(props){
        super(props) 
        // this.set.setCurrentVid() = this.setCurrentVid().bind(this)
        // debugger
    }

    setCurrentVid(url){
        this.props.actions.setCurrentVid(url)
    }

    render(){
        return(
            <div className="pull-right">
                <div>
                    {this.props.video.name} :
                    <br/>
                    <img src={this.props.video.thumbnail} role="presentation" onClick={()=> this.setCurrentVid(this.props.video.url)}/>
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



