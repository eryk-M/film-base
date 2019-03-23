import { FETCH_PEOPLE_DETAILS } from "../actions/peopleDetails.actions";

let initialState = {
  results: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_DETAILS:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
