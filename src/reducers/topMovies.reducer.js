import { FETCH_TOP_MOVIES } from "../actions/topMovies.actions";

let initialState = {
  results: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_MOVIES:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
