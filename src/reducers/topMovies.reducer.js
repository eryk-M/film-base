import {
  FETCH_TOP_MOVIES_BEGIN,
  FETCH_TOP_MOVIES_SUCCESS,
  FETCH_TOP_MOVIES_FAILURE
} from "../actions/topMovies.actions";

let initialState = {
  results: [],
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_MOVIES_BEGIN:
      return { ...state, isLoading: true };
    case FETCH_TOP_MOVIES_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case FETCH_TOP_MOVIES_FAILURE:
      return {
        ...state,
        ...action.payload,
        isLoading: true
      };
    default:
      return state;
  }
};
