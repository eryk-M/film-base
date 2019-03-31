export const FETCH_TOP_TV_BEGIN = "FETCH_TOP_TV_BEGIN";
export const FETCH_TOP_TV_SUCCESS = "FETCH_TOP_TV_SUCCESS";
export const FETCH_TOP_TV_FAILURE = "FETCH_TOP_TV_FAILURE";

export const getTopTV = (api, page) => {
  return dispatch => {
    dispatch({ type: FETCH_TOP_TV_BEGIN });
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${api}&language=en-US&page=${page}`
    )
      .then(res => res.json())
      .then(topTV => {
        if (topTV.success === false) {
          alert(topTV.status_message);
          dispatch({
            type: FETCH_TOP_TV_FAILURE
          });
        } else {
          dispatch({
            type: FETCH_TOP_TV_SUCCESS,
            payload: topTV
          });
        }
      });
  };
};
