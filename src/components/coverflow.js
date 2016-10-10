import React from 'react'
// var ReactDOM = require('react-dom');
import Coverflow from 'react-coverflow';
import { connect } from 'react-redux';

var fn = function () {
  /* do you want */
}



export default function RunCarousel(){
  const imageMap = props.list.map((run)=>{
    return <img src=
  })
  return(<Coverflow
    width={960}
    height={480}
    displayQuantityOfSide={2}
    navigation={true}
    enableHeading={false}
    >
    <img src='[image/path/please_change]' alt='title or description' data-action={fn} />
    <img src='[image/path/please_change]' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
    <img src='[image/path/please_change]' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/"/>
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
export default componentCreator(RunCarousel);
