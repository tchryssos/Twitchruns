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
