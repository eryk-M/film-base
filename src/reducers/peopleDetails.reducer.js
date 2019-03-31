import {
  FETCH_PEOPLE_DETAILS_BEGIN,
  FETCH_PEOPLE_DETAILS_SUCCESS,
  FETCH_PEOPLE_DETAILS_FAILURE
} from "../actions/peopleDetails.actions";

let initialState = {
  results: [],
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_DETAILS_BEGIN:
      return { ...state, isLoading: true };
    case FETCH_PEOPLE_DETAILS_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case FETCH_PEOPLE_DETAILS_FAILURE:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
