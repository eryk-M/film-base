import {
  FETCH_DISCOVER_BEGIN,
  FETCH_DISCOVER_SUCCESS,
  FETCH_DISCOVER_FAILURE
} from "../actions/discover.actions";

let initialState = {
  results: [],
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISCOVER_BEGIN:
      return { ...state, isLoading: true };

    case FETCH_DISCOVER_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case FETCH_DISCOVER_FAILURE:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
