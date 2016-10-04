import { combineReducers } from 'redux';
import runnersReducer from './runners_reducer'


const rootReducer = combineReducers({
   runners: runnersReducer
});

export default rootReducer;
