export const TV_REVIEWS = "TV_REVIEWS";

export const getTVReviews = (tv_id, api) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/reviews?api_key=${api}&language=en-US

      `
    )
      .then(res => res.json())
      .then(TVReviews => {
        dispatch({
          type: TV_REVIEWS,
          payload: TVReviews
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
