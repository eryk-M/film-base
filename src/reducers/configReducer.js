import { POST_MDB_CONFIG } from "../actions/types";

const initialState = {
  apiKey: "2a5d7298a94408e98274cd600f658034"
};

const PostMDBConfig = (state = initialState, action) => {
  switch (action.type) {
    case POST_MDB_CONFIG:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default PostMDBConfig;
