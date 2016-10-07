export default function fetchStreamsReducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_CURRENT_STREAMS':
      return action.payload.streams;
    default:
      return state;
  }
};
