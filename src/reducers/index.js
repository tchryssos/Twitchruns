import { combineReducers } from 'redux';
import runsReducer from './runners_reducer'
import run_nail_reducer from './run_nail_reducer'


const rootReducer =  combineReducers({
  runs: runsReducer,
  run_nail: run_nail_reducer
})

export default rootReducer;
