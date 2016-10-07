import {applyMiddleware, compose, combineReducers } from 'redux';
import runsReducer from './runs_reducer'
import runnersReducer from './runners_reducer'
import run_nail_reducer from './run_nail_reducer'
import fetchStreamsReducer from './fetch_streams_reducer'
import { reducer as searchReducer, reduxSearch } from 'redux-search'
import ReduxPromise from 'redux-promise'

export const rootReducer =  combineReducers({
  search: searchReducer,
  runs: runsReducer,
  runners: runnersReducer,
  run_nail: run_nail_reducer,
  streams: fetchStreamsReducer,
})

export const enhancer = compose(
  applyMiddleware(ReduxPromise),
  reduxSearch({
    // Configure redux-search by telling it which resources to index for searching
    resourceIndexes: {
      // In this example Books will be searchable by :title and :author
      runs: [ 'username']
    },
    // This selector is responsible for returning each collection of searchable resources
    resourceSelector: (resourceName, state) => {
      debugger
      // In our example, all resources are stored in the state under a :resources Map
      // For example "books" are stored under state.resources.books
      return state[resourceName]
    }
  })
)
