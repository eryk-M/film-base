import { FETCH_TV_VIDEOS } from "../../actions/TVactions/TVVideos.actions";

let initialState = {
  results: [],
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TV_VIDEOS:
      return { ...state, ...action.payload, loaded: true };
    default:
      return state;
  }
};
