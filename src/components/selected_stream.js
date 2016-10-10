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
      <div className='title-div'>
        <h1>{props.run.run_placement.name}</h1> <h2> {props.run.run_placement.category}        Rank: {props.run.place}</h2>
      {videoEmbed}
      </div>
      </div>
    </div> 
  )
}




// const componentCreator = connect(mapStateToProps)
// export default componentCreator(SelectedStream);
