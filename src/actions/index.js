import {apiBaseLink} from "../constants"

// export function fetchRunners(){
//   const runners = fetch(`${apiBaseLink}/runners`).then(response => {
//   return response.json()
// }).then(runnersPayload => {
//   return runnersPayload
// })
//
// return {
//   type: 'FETCH_RUNNERS',
//   payload: runners
// }
// }

export function fetchRuns(){
  const runs = fetch(`${apiBaseLink}/runs`).then(response => {
    return response.json()
  }).then(runnersPayload => {
    return runnersPayload
  })

  return {
    type: 'FETCH_RUNS',
    payload: runs
  }
}

export function fetchLeaderboard(){
  const leaderboard = fetch(`${apiBaseLink}/category_leaderboards`).then(response => {
  return response.json()
}).then(leadersPayload => {
  return leadersPayload
})

return {
  type: 'FETCH_CATEGORY_LEADERBOARDS',
  payload: leaderboard
}
}

export function filterRuns(term){
  return {
    type: 'FETCH_SEARCH',
    payload: term
  }
}
export function fetchTwitchStreams(run){
  const liveStreams=fetch(`${apiBaseLink}/streams`, {
    method: 'post',
    headers: {
     "Content-type": "application/json",
     "Accepts": "application/json"
    },
    body: JSON.stringify({run: run})
  }).then(response =>{
    return response.json()
  }).then(streamsPayload =>{
    return streamsPayload
  })
  return {
    type: 'FETCH_CURRENT_STREAMS',
    payload: liveStreams
  }
}
