import { combineReducers } from 'redux';
import runsReducer from './runs_reducer'
import fetchStreamsReducer from './fetch_streams_reducer'

 const rootReducer =  combineReducers({
  runs: runsReducer,
  streams: fetchStreamsReducer
})

export default rootReducer;
