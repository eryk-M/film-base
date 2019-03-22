import { SEARCH_RESULTS } from "../actions/search.actions";

let initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
