import React from 'react'
import { connect } from 'react-redux'

export default function SelectedStream(props){
  const videoUrlArray = props.run.run_url.split('=')
  const videoUrl = 'https://www.youtube.com/embed/' + videoUrlArray[1] +'?autoplay=1'
  return(
    <div className='col-md-8' >
      <div className='col-md-2' style={{float: 'left', padding:'50px'}}>
        <ul><label>Runner Stats:</label>
        <li>{props.run.runner_id}</li>
        </ul>
      </div>
      <div className='col-md-3 col-md-offset-2' style={{padding:'50px 30px'}}>
        <iframe width="600" height="450" src={videoUrl} allowFullScreen>
        </iframe>
      </div>
    </div>
  )
}




// const componentCreator = connect(mapStateToProps)
// export default componentCreator(SelectedStream);
