export default function runsReducer(state={}, action) {
  switch(action.type){
    case 'FETCH_RUNNERS':
      return action.payload
    case 'FETCH_RUNS':
      return action.payload
    default:
      return state
  }
}
