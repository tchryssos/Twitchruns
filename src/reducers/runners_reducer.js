export default function runnersReducer(state={}, action) {
  switch(action.type){
    case 'FETCH_RUNNERS':
    debugger
      return action.payload
    default:
      return state
  }
}
