export const TV_EXTERNAL = "TV_EXTERNAL";

export const getTVExternal = (tv_id, api) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/external_ids?api_key=${api}&language=en-US
      `
    )
      .then(res => res.json())
      .then(TVExternal => {
        dispatch({
          type: TV_EXTERNAL,
          payload: TVExternal
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
