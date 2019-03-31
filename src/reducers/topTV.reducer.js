import {
  FETCH_TOP_TV_BEGIN,
  FETCH_TOP_TV_SUCCESS,
  FETCH_TOP_TV_FAILURE
} from "../actions/topTV.actions";

let initialState = {
  results: [],
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_TV_BEGIN:
      return { ...state, isLoading: true };
    case FETCH_TOP_TV_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case FETCH_TOP_TV_FAILURE:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
