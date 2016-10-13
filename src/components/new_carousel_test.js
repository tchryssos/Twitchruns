import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Carousel from 'nuka-carousel'
import Spinner from 'react-spin'

function NewCarousel (props) {

    const GetThumbnail = (run) => {
      if (run.thumbnail==="none"){
        return run.game.artwork_url
      } else {
        return run.thumbnail
      }
    }

   const FeaturedVideoList = props.videoList.map( (run, i) => {
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
            case 3:
                trophy ='3rd Place'
                bg = 'brown'
                break;
            default:
                trophy ='Scrub'
                bg = 'pink'
            }

    return (<figure key={run.id}>
              <figcaption style={{backgroundColor: bg}} className='row'>
                {run.run_placement.category}
              </figcaption>

              <Link to={`/runs/${run.id}`}>
                <img height='100px' src={GetThumbnail(run)} role='presentation' />
              </Link>

              <figcaption className='row' style={{backgroundColor: bg} }>
                {trophy}
              </figcaption>
            </figure>
            )
        })

        if (props.videoList[1]){
            return(
              <div className='container' >
                <Carousel slidesToShow={6} cellSpacing={20} easing="easeInQuad" slidesToScroll={5} dragging={true} cellAlign={'left'} >
                  {FeaturedVideoList}
                </Carousel>

                <div className='row'>
                  <h3>Select a speedrun from above or filter the browser by game, category, or runner! <br/> Click the Twitchruns console to return to the browser.</h3>
                </div>

              </div>)
        }
        else {
            return (<Spinner />)
        }
    }


function mapStateToProps(state, ownProps) {
  if (state.runs.original){
    return {videoList: state.runs.filtered}}
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
export default componentCreator(NewCarousel)
