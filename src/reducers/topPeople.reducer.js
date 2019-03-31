import {
  FETCH_TOP_PEOPLE_BEGIN,
  FETCH_TOP_PEOPLE_SUCCESS,
  FETCH_TOP_PEOPLE_FAILURE
} from "../actions/topPeople.actions";

let initialState = {
  results: [],
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_PEOPLE_BEGIN:
      return { ...state, isLoading: true };
    case FETCH_TOP_PEOPLE_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case FETCH_TOP_PEOPLE_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
