import {
  FETCH_TV_DETAILS_BEGIN,
  FETCH_TV_DETAILS_SUCCESS,
  FETCH_TV_DETAILS_FAILURE
} from "../../actions/TVactions/TVDetails.actions";

let initialState = {
  results: [],
  isLoading: true,
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TV_DETAILS_BEGIN:
      return { ...state, isLoading: true, error: false };
    case FETCH_TV_DETAILS_SUCCESS:
      return { ...state, ...action.payload, isLoading: false, error: false };
    case FETCH_TV_DETAILS_FAILURE:
      return { ...state, isLoading: true, error: true };
    default:
      return state;
  }
};
