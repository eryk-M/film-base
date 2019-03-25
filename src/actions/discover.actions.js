export const FETCH_DISCOVER = "FETCH_DISCOVER";

export const getDiscover = (
  api,
  page,
  sortBy,
  voteAverage,
  yearMin,
  yearMax
) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}&vote_average.gte=${voteAverage}&primary_release_date.gte=${yearMin}-01-01&primary_release_date.lte=${yearMax}-12-12`
    )
      .then(res => res.json())
      .then(discover => {
        dispatch({
          type: FETCH_DISCOVER,
          payload: discover
        });
      })
      .catch(err => {
        alert(err);
      });
  };
};
