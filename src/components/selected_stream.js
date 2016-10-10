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

  const otherPlacedRuns = () => {
    if (props.run.runner.placed_runs[1]) {
      if (props.run.runner.placed_runs[2]) {
        return (<div>
        <h5><span className="red">{props.run.runner.username}s Other Placed Runs: </span> {props.run.runner.placed_runs[1].game}: {props.run.runner.placed_runs[1].category}, {props.run.runner.placed_runs[2].game}: {props.run.runner.placed_runs[2].category} </h5>  
        </div>)}
      else {
        return (
        <h5><span className="red">{props.run.runner.username}s Other Placed Runs: </span> {props.run.runner.placed_runs[1].game}: {props.run.runner.placed_runs[1].category} </h5>
      )}
     }
    }


  return(
    <div className='col-md-8' >
      <div className="left-side-div" style={{float: 'left', padding:'160px 10px 80px 40px'}}>
        <h3>Run Info </h3>
         <h5><span className="red">Runner: </span> {props.run.runner.username} </h5> 
         <h5><span className="red">Run Rank: </span>  {props.run.place} </h5>
         <h5><span className="red">Rules: </span> {props.run.category_leaderboard.rules}</h5>
         {otherPlacedRuns()}
         <h5><span className="red">Game Art:</span></h5> <img src={props.run.game.artwork_url} height="100px" width="180px"/> 
      </div>
      <div className='col-md-6 col-md-offset-1' style={{padding:'50px 30px'}}>
      <div className='title-div'>
        <h1>{props.run.run_placement.name}</h1> <h2> {props.run.run_placement.category} Rank: {props.run.place}</h2>
      {videoEmbed}
      </div>
      </div>
    </div> 
  )
}




// const componentCreator = connect(mapStateToProps)
// export default componentCreator(SelectedStream);
