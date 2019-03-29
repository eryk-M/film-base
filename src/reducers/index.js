import movies from "./upcoming.reducer";
import genres from "./genres.reducer";
import topMovies from "./topMovies.reducer";
import topPeople from "./topPeople.reducer";
import topTV from "./topTV.reducer";
import results from "./search.reducer";
import moviesDetails from "./moviesDetails.reducer";
import api from "./api.reducer";
import videos from "./videos.reducer";
import searchResults from "./search.reducer";
import movieCredits from "./movieCredits.reducer";
import peopleDetails from "./peopleDetails.reducer";
import peopleCredits from "./peopleMovieCredits.reducer";
import discover from "./discover.reducer";

import requestToken from "./auth/getRequestToken.reducer";
import sessionID from "./auth/postSessionId.reducer";
import accountDetails from "./auth/getAccountDetails.reducer";
import status from "./auth/changeStatus.reducer";
import del_session from "./auth/deleteSession.reducer";

import movieFavorites from "./userFavorites/movieFavorites.reducer";
import TVFavorites from "./userFavorites/TVFavorites.reducer";
import movieState from "./userFavorites/movieAccountState.reducer";

import TVDetails from "./TVReducers/TVDetails.reducer";
import TVVideos from "./TVReducers/TVVideos.reducer";
import TVCredits from "./TVReducers/TVCredits.reducer";
import TVState from "./userFavorites/TVAccountState.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movies,
  genres,
  topMovies,
  topPeople,
  topTV,
  results,
  moviesDetails,
  api,
  videos,
  searchResults,
  movieCredits,
  peopleDetails,
  peopleCredits,
  discover,
  requestToken,
  sessionID,
  accountDetails,
  status,
  movieFavorites,
  TVFavorites,
  del_session,
  movieState,
  TVDetails,
  TVVideos,
  TVCredits,
  TVState
});

export default rootReducer;
