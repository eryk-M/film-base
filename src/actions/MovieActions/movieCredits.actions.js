export const MOVIE_CREDITS = "MOVIE_CREDITS";

export const getMovieCredits = (movie_id, api) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${api}
      `
    )
      .then(res => res.json())
      .then(movieCredits => {
        dispatch({
          type: MOVIE_CREDITS,
          payload: movieCredits
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
