import { CHANGE_STATUS } from "../../actions/auth/changeStatus.actions";

let initialState = {
  status: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return { ...state, ...action.status };
    default:
      return state;
  }
};
