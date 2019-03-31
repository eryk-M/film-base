import {
  FETCH_UPCOMING_FAIL,
  FETCH_UPCOMING_SUCCESS,
  FETCH_UPCOMING_BEGIN
} from "../actions/upcoming.actions";

let initialState = {
  isLoading: true,
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING_BEGIN:
      return { ...state, isLoading: true };
    case FETCH_UPCOMING_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case FETCH_UPCOMING_FAIL:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
