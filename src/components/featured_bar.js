import React from 'react';
import FeaturedVideo from './featured_video';
import { connect } from 'react-redux';

 function FeaturedBar(props){
   const GetThumbnail = (run_url) =>{
     const endpoint = 'http://img.youtube.com/vi/' + run_url.split('=')[1] + '/1.jpg'
     return endpoint
   }

   const FeaturedVideoList = props.videoList.map((run, i)=>{
     return <FeaturedVideo key={i} picUrl={GetThumbnail(run.run_url)} runId={run.id} runnerId={run.runner_id} />
   })

  return(
    <div className='container-fluid'>
      {FeaturedVideoList}
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  if (state.runs.length > 0){
    return {videoList: state.runs}}
  else{
    return {videoList: [{
              speedrun_id: "",
              id: 1,
              run_url: "https://www.youtube.com/watch?v=EfS81QvdbF8",
              runner_id: 1}]
            }
      }
}
const componentCreator = connect(mapStateToProps)
export default componentCreator(FeaturedBar);
