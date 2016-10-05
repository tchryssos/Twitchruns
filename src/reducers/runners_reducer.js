export default function runnersReducer(state={}, action) {
  switch(action.type){
    case 'FETCH_RUNNERS':
      return action.payload
    default:
      return state
  }
}
