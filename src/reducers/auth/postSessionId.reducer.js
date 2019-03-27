import { POST_SESSION_ID } from "../../actions/auth/postSessionId.actions";

let initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_SESSION_ID:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
