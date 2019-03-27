import { GET_REQUEST_TOKEN } from "../../actions/auth/getRequestToken.actions";

let initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REQUEST_TOKEN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
