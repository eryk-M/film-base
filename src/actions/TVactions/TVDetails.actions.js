export const FETCH_TV_DETAILS_BEGIN = "FETCH_TV_DETAILS_BEGIN";
export const FETCH_TV_DETAILS_SUCCESS = "FETCH_TV_DETAILS_SUCCESS";
export const FETCH_TV_DETAILS_FAILURE = "FETCH_TV_DETAILS_FAILURE";

export const getTVDetails = (tv_id, api) => {
  return dispatch => {
    dispatch({ type: FETCH_TV_DETAILS_BEGIN });
    fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${api}&language=en-US`
    )
      .then(res => res.json())
      .then(TVDetails => {
        if (TVDetails.success === false) {
          alert(TVDetails.status_message);
          dispatch({
            type: FETCH_TV_DETAILS_FAILURE
          });
        } else {
          dispatch({
            type: FETCH_TV_DETAILS_SUCCESS,
            payload: TVDetails
          });
        }
      });
  };
};
