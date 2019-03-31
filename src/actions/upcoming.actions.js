export const FETCH_UPCOMING_BEGIN = "FETCH_UPCOMING_BEGIN";
export const FETCH_UPCOMING_SUCCESS = "FETCH_UPCOMING_SUCCESS";
export const FETCH_UPCOMING_FAIL = "FETCH_UPCOMING_FAIL";

export const getUpcoming = (api, page) => {
  return dispatch => {
    dispatch({ type: FETCH_UPCOMING_BEGIN });
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=${page}`
    )
      .then(res => res.json())
      .then(movies => {
        if (movies.success === false) {
          alert(movies.status_message);
          dispatch({
            type: FETCH_UPCOMING_FAIL,
            payload: movies.status_message
          });
        } else {
          dispatch({
            type: FETCH_UPCOMING_SUCCESS,
            payload: movies
          });
        }
      });
  };
};
