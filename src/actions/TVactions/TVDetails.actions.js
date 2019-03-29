export const FETCH_TV_DETAILS = "FETCH_TV_DETAILS";

export const getTVDetails = (tv_id, api) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=${api}&language=en-US`
    )
      .then(res => res.json())
      .then(TVDetails => {
        dispatch({
          type: FETCH_TV_DETAILS,
          payload: TVDetails
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
