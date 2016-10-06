import React from 'react';
// import FeaturedVideo from './featured_video';
import { connect } from 'react-redux';
// import RunCarousel from './coverflow'
import Coverflow from 'react-coverflow';
import {Link} from 'react-router'

 function FeaturedBar(props){

 
   const GetThumbnail = (run) =>{

     if (run.run_url.includes("youtube")) {
     const endpoint = 'http://img.youtube.com/vi/' + run.run_url.split('=')[1] + '/1.jpg'
      return endpoint }
     else {
       const endpoint = run.game.artwork_url


       return endpoint
     }
   }


  //  const FeaturedVideoList = props.videoList.map((run, i)=>{
  //    return <FeaturedVideo key={i} picUrl={GetThumbnail(run)} run={run} runnerId={run.runner_id} />
  //  })

  const FeaturedVideoList = props.videoList.map((run, i)=>{
    let trophy = ''
    let bg = ''
    switch(run.run_placement.place){
      case 1:
        trophy = 'World Record'
        bg = 'gold'
        break;
      case 2:
        trophy = '2nd Place'
        bg = 'silver'
        break;
      default:
        trophy ='3rd Place'
        bg = 'brown'
    }
    return (<div className='col-md-2' >
              <div className='row'>{run.run_placement.category}</div>
              <Link to={`/runs/${run.id}`}><img height='100px' width='180px' src={GetThumbnail(run)} /></Link>
              <div className='row' style={{backgroundColor: bg}}>{trophy}</div>
            </div>
            )
  })

  // return(
  //   <div className='container-fluid' style={{background: 'black'}}>
  //     // {FeaturedVideoList}
  //     <RunCarousel list={props.videoList} ></RunCarousel>
  //   </div>
  // )
  return(<Coverflow
    width={1100}
    height={240}
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={true}
    enableHeading={false}
    >
    {FeaturedVideoList}
  </Coverflow>)
}

function mapStateToProps(state, ownProps) {
  if (state.runs.length > 0){
    return {videoList: state.runs}}
  else{
    return {videoList: [{
              speedrun_id: "",
              id: 1,
              run_url:"pk=pq",
              runner_id: 1,
              run_placement: {
name: "Super Mario 64",
category: "120 Star",
place: 1
},
              runner: {
                  username: "cheese05",
                  id: 1,
                  stream_url: "https://www.twitch.tv/cheese05",
                  twitch_id: null},
              game: {
    name: "Super Mario 64",
    id: 1,
    artwork_url: "http://www.mobygames.com/images/covers/l/216304-super-mario-64-nintendo-64-front-cover.jpg"
    },
    category_leaderboard: {
    title: "120 Star",
    rules: "Complete the game while collecting every star. No restrictions. All forms of BLJ are allowed. Timing starts from reset and ends when the big star is collected at the end of the game.",
    placement_list: {
    1: "8m73rgwy",
    2: "1zqjp35m",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10"
    }
    }
                }]
            }
      }
}
const componentCreator = connect(mapStateToProps)
export default componentCreator(FeaturedBar);
