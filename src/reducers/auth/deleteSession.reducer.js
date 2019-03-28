import { DELETE_SESSION } from "../../actions/auth/deleteSession.actions";

let initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_SESSION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
