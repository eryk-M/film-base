import { FETCH_MOVIES_DETAILS } from "../actions/moviesDetails.actions";

let initialState = {
  results: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_DETAILS:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
