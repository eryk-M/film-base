import { TV_REVIEWS } from "../../actions/TVactions/TVReviews.actions";

let initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TV_REVIEWS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
