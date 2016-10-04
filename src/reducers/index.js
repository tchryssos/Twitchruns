import { combineReducers } from 'redux';
import runnersReducer from './runners_reducer'
import run_nail_reducer from './run_nail_reducer'


const rootReducer =  combineReducers({
  runners: runnersReducer,
  run_nail: run_nail_reducer
})

export default rootReducer;
