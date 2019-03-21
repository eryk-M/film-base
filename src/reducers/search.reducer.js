import { SEARCH_RESULTS } from "../actions/search.actions";

let initialState = {
  //   film: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
