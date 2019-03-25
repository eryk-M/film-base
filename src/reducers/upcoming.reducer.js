import { FETCH_UPCOMING } from "../actions/upcoming.actions";

let initialState = {
  loading: false,
  results: []
};
// loaded: false

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
