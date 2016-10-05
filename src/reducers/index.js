import { combineReducers } from 'redux';
import runsReducer from './runs_reducer'
import runnersReducer from './runners_reducer'
import run_nail_reducer from './run_nail_reducer'


const rootReducer =  combineReducers({
  runs: runsReducer,
  runners: runnersReducer,
  run_nail: run_nail_reducer
})

export default rootReducer;
