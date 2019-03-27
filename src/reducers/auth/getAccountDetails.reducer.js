import { GET_ACCOUNT_DETAILS } from "../../actions/auth/getAccountDetails.actions";

let initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
