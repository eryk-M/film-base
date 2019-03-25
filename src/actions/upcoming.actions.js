export const FETCH_UPCOMING = "FETCH_UPCOMING";

export const getUpcoming = (api, page) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=${page}`
    )
      .then(res => res.json())
      .then(movies => {
        dispatch({
          type: FETCH_UPCOMING,
          payload: movies
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
