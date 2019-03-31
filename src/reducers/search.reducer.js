import {
  SEARCH_RESULTS_BEGIN,
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_FAILURE
} from "../actions/search.actions";

let initialState = {
  results: [],
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RESULTS_BEGIN:
      return { ...state, isLoading: true };
    case SEARCH_RESULTS_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case SEARCH_RESULTS_FAILURE:
      return { ...state, isLoading: true };

    default:
      return state;
  }
};
