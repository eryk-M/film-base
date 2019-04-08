export const MOVIE_EXTERNAL = "MOVIE_EXTERNAL";

export const getMovieExternal = (movie_id, api) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/external_ids?api_key=${api}
      `
    )
      .then(res => res.json())
      .then(movieExternal => {
        dispatch({
          type: MOVIE_EXTERNAL,
          payload: movieExternal
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
