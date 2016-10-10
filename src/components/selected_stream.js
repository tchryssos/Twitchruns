import React from 'react'

export default function SelectedStream(props){
  let videoUrl = ''
  if (props.runUrl.includes('youtube')){
    const videoUrlArray = props.runUrl.split('=')
    videoUrl = 'https://www.youtube.com/embed/' + videoUrlArray[1] +'?autoplay=1'
    var videoEmbed =   <iframe width="600" height="450" src={videoUrl} allowFullScreen>
            </iframe>
  }else if(props.runUrl.includes('channel')) {
      var videoEmbed =   <iframe width="600" height="450" src={props.runUrl} allowFullScreen>
            </iframe>
  }else if(props.runUrl.includes('twitch')) {
    var videoArray = props.runUrl.split('/')
    var videoId = videoArray[videoArray.length - 1]
    var twitchUrl = 'https://player.twitch.tv/?video=v' + videoId
    var videoEmbed =   <iframe width="600" height="450" src={twitchUrl} allowFullScreen>
            </iframe>
  }
  debugger
  return(
    <div className='col-md-8' >
      <div className='col-md-3' style={{float: 'left', padding:'80px 10px 80px 40px'}}>
        <ul><label>Runner Stats:</label>
        <li>Runner: {props.run.runner.username}</li>
        <li>Run Rank: {props.run.place}</li>
        </ul>
      </div>
      <div className='col-md-6 col-md-offset-2' style={{padding:'50px 30px'}}>
      <div className='row'>
      <h3 style={{float: 'left', padding: '0px 0px 5px 15px'}}>{props.run.run_placement.name}: {props.run.run_placement.category}</h3>
      <h3 style={{float: 'right',padding: '0px 0px 5px 0px' }}>Rank: {props.run.place}</h3>
      </div>
      {videoEmbed}


      </div>
    </div>
  )
}




// const componentCreator = connect(mapStateToProps)
// export default componentCreator(SelectedStream);
