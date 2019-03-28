export const GET_MOVIE_FAVORITES = "GET_MOVIE_FAVORITES";

export const getMovieFavorites = (api, accountID, sessionID) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/account/${accountID}/favorite/movies?api_key=${api}&session_id=${sessionID}&language=en-US&sort_by=created_at.asc&page=1
      `
    )
      .then(res => res.json())
      .then(movieFavorites => {
        dispatch({
          type: GET_MOVIE_FAVORITES,
          payload: movieFavorites
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
