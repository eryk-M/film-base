export const FETCH_TV_DETAILS_BEGIN = "FETCH_TV_DETAILS_BEGIN";
export const FETCH_TV_DETAILS_SUCCESS = "FETCH_TV_DETAILS_SUCCESS";
export const FETCH_TV_DETAILS_FAILURE = "FETCH_TV_DETAILS_FAILURE";

export const getTVDetails = (tv_id, api) => {
  return dispatch => {
    dispatch({ type: FETCH_TV_DETAILS_BEGIN });
    fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${api}&language=en-US`
    )
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          dispatch({
            type: FETCH_TV_DETAILS_FAILURE
          });
        }
      })
      .then(res => res.json())
      .then(TVDetails => {
        dispatch({
          type: FETCH_TV_DETAILS_SUCCESS,
          payload: TVDetails
        });
      })
      .catch(err => console.log(err));
  };
};
