import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Carousel from 'nuka-carousel'

function NewCarousel (props) {

    const GetThumbnail = (run) => {
        var runThumbUrl = "" 
            if (run.run_url.includes("youtube")) {
                runThumbUrl = 'http://img.youtube.com/vi/' + run.run_url.split('=')[1] + '/1.jpg'
            }
            else {
                runThumbUrl = run.game.artwork_url
            }
        return runThumbUrl
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
            default:
                trophy ='3rd Place'
                bg = 'brown'
            }
    return (<figure key={run.id}>
              <figcaption style={{backgroundColor: bg}} className='row'>{run.run_placement.category} </figcaption>
              <Link to={`/runs/${run.id}`}><img height='100px' width='220px' src={GetThumbnail(run)} /></Link>
              <figcaption className='row' style={{backgroundColor: bg} }>{trophy}
              </figcaption>
            </figure>
            )
  })

return( <Carousel slidesToShow={5} cellSpacing={100} easing="easeInQuad" slidesToScroll={4} dragging={true}  cellAlign={'center'}>
{FeaturedVideoList}
</Carousel>)

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
export default componentCreator(NewCarousel);

   
    // getThumbnails(run){
    //     var runThumbnail = ""
    //     if (run.run_url.includes("youtube")) {
    //         runThumbnail = '<img src="http://img.youtube.com/vi/' + run.run_url.split('=')[1] + '/1.jpg"/>';
    //          }
    //     else {
    //         runThumbnail = "'<img src=" + run.game.artwork_url + "/>'"
    //     }
    //     // this.allrunThumbnailsForCarouselWrapper(runThumbnail)
    // }

    // allrunThumbnailsForCarouselWrapper(taggedImgUrl){
    //     this.setState.carouselPics.push(taggedImgUrl)
    // }

    // carouselWrapper(){
    //     debugger
    //     this.state.carouselPics
    // }

    // sample carousel object
        // <figure>
        //     <img src="http://www.mobygames.com/images/covers/l/216304-super-mario-64-nintendo-64-front-cover.jpg" height="100px" width="180px" />
        //     <figcaption> ecezalp </figcaption>
        // </figure>

   
           
//             // carousel tags that 
//         )
//     }
// }

