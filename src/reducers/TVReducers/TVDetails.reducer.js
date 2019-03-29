import { FETCH_TV_DETAILS } from "../../actions/TVactions/TVDetails.actions";

let initialState = {
  results: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TV_DETAILS:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
