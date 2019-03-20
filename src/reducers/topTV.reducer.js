import { FETCH_TOP_TV } from "../actions/topTV.actions";

let initialState = {
  results: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOP_TV:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
