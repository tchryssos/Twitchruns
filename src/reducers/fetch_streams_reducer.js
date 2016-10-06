export default function fetchStreamsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_CURRENT_STREAMS':
    debugger
      return action.payload;
    default:
      return state;
  }
};
