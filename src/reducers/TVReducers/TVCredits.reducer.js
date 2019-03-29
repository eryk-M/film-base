import { FETCH_TV_CREDITS } from "../../actions/TVactions/TVCredits.actions";

let initialState = {
  cast: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TV_CREDITS:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
