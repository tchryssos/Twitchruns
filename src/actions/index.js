export function fetchRunners(){
  const runners = fetch('http://localhost:3000/api/v1/runners').then(response => {
    debugger
  return response.json()
}).then(runnersPayload => {
  debugger
  return runnersPayload
})

return {
  type: 'FETCH_RUNNERS',
  payload: runners
}
}

export function fetchRuns(){
  const runners = fetch('http://localhost:3000/api/v1/runs').then(response => {
    debugger
  return response.json()
}).then(runnersPayload => {
  debugger
  return runnersPayload
})

return {
  type: 'FETCH_RUNS',
  payload: runners
}

}

export function fetchLeaderboard(){
  const leaderboard = fetch('http://localhost:3000/api/v1/category_leaderboards').then(response => {
  return response.json()
}).then(leadersPayload => {
  return leadersPayload
})

return {
  type: 'FETCH_CATEGORY_LEADERBOARDS',
  payload: leaderboard
}
}

export function fetchWrVideos(){
//   const leaderboard = fetch('http://localhost:3000/api/v1/category_leaderboards').then(response => {
//   return response.json()
// }).then(leadersPayload => {
//   return leadersPayload
// })

  const wrVideoObjects =  [
     {
      name: "120Star",
      url: 'https://www.youtube.com/watch?v=EfS81QvdbF8',
      thumbnail: 'http://img.youtube.com/vi/EfS81QvdbF8/1.jpg'},
    {
      name: "70Star",
      url: "https://www.youtube.com/watch?v=C1KH6Mf7b3E",
      thumbnail: "http://img.youtube.com/vi/C1KH6Mf7b3E/1.jpg"},
    {
      name: "16Star",
      url: "https://www.youtube.com/watch?v=4xxPlFKk7-0",
      thumbnail: "http://img.youtube.com/vi/4xxPlFKk7-0/1.jpg"}
  ]

  return {
    type: 'FETCH_WR_VIDEOS',
    payload: wrVideoObjects
  }

}

export function fetchStreams(){
  const streamVideoObjects = ["http://fake.com", "http://fake.com", "http://fake.com"]
  return {
    type: 'FETCH_STREAMS',
    payload: streamVideoObjects
  }
}

export function setCurrentVideo(url){
  const currentVideoUrl = url
  return {
    type: 'SET_CURRENT_VIDEO',
    payload: currentVideoUrl
  }
}
