import { GET_VIDEOS } from "../actions/videos.actions";

let initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
