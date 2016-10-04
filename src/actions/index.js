export function fetchCurrentRuns(){
  const runs = fetch('http://localhost:3000/api/v1/runs').then(response => {
  return response.json()
}).then(runsPayload => {
  return runsPayload
})

return {
  type: 'FETCH_CURRENT_RUNS',
  payload: runs
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
