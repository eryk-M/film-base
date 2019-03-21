export const GET_VIDEOS = "GET_VIDEOS";

export const getVideos = (movie_id, api) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${api}&language=en-US
      `
    )
      .then(res => res.json())
      .then(videos => {
        dispatch({
          type: GET_VIDEOS,
          payload: videos
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
