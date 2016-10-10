export default function runsReducer(state={}, action) {
  switch(action.type){
    case 'FETCH_RUNS':
      return  {original: action.payload, filtered: action.payload}
    case 'FETCH_SEARCH':
      let term = action.payload.toLowerCase()
      return {original: state.original,
              filtered: state.original.filter((run)=>{
                debugger
                      return run.game.name.toLowerCase().includes(term) ||
                      run.run_placement.category.toLowerCase().includes(term) ||
                      run.runner.username.toLowerCase().includes(term)
                    })}
    default:
      return state
  }
}
