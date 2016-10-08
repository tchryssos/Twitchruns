export default function runsReducer(state={}, action) {
  switch(action.type){
    case 'FETCH_RUNS':
      return  {original: action.payload, filtered: action.payload}
    case 'FETCH_SEARCH':
      debugger
      return {original: state.original, filtered: state.original.filter((run)=>{return run.game.name.toLowerCase().includes(action.payload.toLowerCase())})}
    default:
      return state
  }
}
