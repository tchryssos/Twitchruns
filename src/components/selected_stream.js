import React from 'react'
import { connect } from 'react-redux'

export default function SelectedStream(props){
  debugger
  return(
    <div className='container-fluid'>
      <video width="320" height="240" autoplay>
        <source src={props.run.video}>
      </video>
    </div>
  )
}


const componentCreator = connect(mapStateToProps)
export default componentCreator(SelectedStream);
