export const FETCH_TV_CREDITS = "FETCH_TV_CREDITS";

export const getTVCredits = (tv_id, api) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=${api}&language=en-US`
    )
      .then(res => res.json())
      .then(TVCredits => {
        dispatch({
          type: FETCH_TV_CREDITS,
          payload: TVCredits
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
