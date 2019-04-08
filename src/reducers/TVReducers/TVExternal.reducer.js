import { TV_EXTERNAL } from "../../actions/TVactions/TVExternal.actions";

let initialState = {
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TV_EXTERNAL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
