//API
import api from "./api.reducer";
//GENRES
import genres from "./genres.reducer";
//SEARCH MOVIES
import searchResults from "./search.reducer";
//UPCOMING, DISCOVER, TOP MOVIES, TOP PEOPLE, TOP TV MAIN
import movies from "./upcoming.reducer";
import discover from "./discover.reducer";
import topMovies from "./topMovies.reducer";
import topPeople from "./topPeople.reducer";
import topTV from "./topTV.reducer";
//PEOPLE DETAILS
import peopleDetails from "./peopleDetails.reducer";
import peopleCredits from "./peopleMovieCredits.reducer";
//AUTHENTICATION
import requestToken from "./auth/getRequestToken.reducer";
import sessionID from "./auth/postSessionId.reducer";
import accountDetails from "./auth/getAccountDetails.reducer";
import status from "./auth/changeStatus.reducer";
import del_session from "./auth/deleteSession.reducer";
//FAVORITES
import movieFavorites from "./userFavorites/movieFavorites.reducer";
import TVFavorites from "./userFavorites/TVFavorites.reducer";
//MOVIE DETAILS & MOVIE STATE CHECKER
import videos from "./MovieReducers/videos.reducer";
import moviesDetails from "./MovieReducers/moviesDetails.reducer";
import movieCredits from "./MovieReducers/movieCredits.reducer";
import movieState from "./userFavorites/movieAccountState.reducer";
//TV DETAILS & TV STATE CHECKER
import TVDetails from "./TVReducers/TVDetails.reducer";
import TVVideos from "./TVReducers/TVVideos.reducer";
import TVCredits from "./TVReducers/TVCredits.reducer";
import TVState from "./userFavorites/TVAccountState.reducer";
/*                                   */
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  movies,
  genres,
  topMovies,
  topPeople,
  topTV,
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
