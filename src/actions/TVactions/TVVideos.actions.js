export const FETCH_TV_VIDEOS = "FETCH_TV_VIDEOS";

export const getTVVideos = (tv_id, api) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=${api}&language=en-US`
    )
      .then(res => res.json())
      .then(TVVideos => {
        dispatch({
          type: FETCH_TV_VIDEOS,
          payload: TVVideos
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
