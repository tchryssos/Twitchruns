import React from 'react'
import { connect } from 'react-redux'

export default function SelectedStream(props){
  const videoUrlArray = props.video.split('=')
  const videoUrl = 'https://www.youtube.com/embed/' + videoUrlArray[1] +'?autoplay=1'
  debugger
  return(
    <div className='container-fluid'>
      <iframe width="420" height="315" src={videoUrl} allowfullscreen>
      </iframe>
    </div>
  )
}


// const componentCreator = connect(mapStateToProps)
// export default componentCreator(SelectedStream);
