export default function run_nail_reducer(state=[], action) {
  switch ( action.type ) {
    case 'FETCH_WR_VIDEOS':
        return action.payload;
    default:
      return state;
  }
};
