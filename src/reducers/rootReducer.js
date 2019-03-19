import { combineReducers } from "redux";
import PostMDBConfigReducer from "./configReducer";
// import postMoviesUpcoming from "../reducers/moviesReducer";

const rootReducer = combineReducers({
  PostMDBConfig: PostMDBConfigReducer
  //   postMoviesUpcoming
});

export default rootReducer;
