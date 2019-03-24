import { FETCH_DISCOVER } from "../actions/discover.actions";

let initialState = {
  results: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DISCOVER:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
