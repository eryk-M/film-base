export const MOVIE_REVIEWS = "MOVIE_REVIEWS";

export const getMovieReviews = (movie_id, api) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${api}&language=en-US
      `
    )
      .then(res => res.json())
      .then(movieReviews => {
        dispatch({
          type: MOVIE_REVIEWS,
          payload: movieReviews
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
