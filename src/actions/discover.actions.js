export const FETCH_DISCOVER_BEGIN = "FETCH_DISCOVER_BEGIN";
export const FETCH_DISCOVER_SUCCESS = "FETCH_DISCOVER_SUCCESS";
export const FETCH_DISCOVER_FAILURE = "FETCH_DISCOVER_FAILURE";

export const getDiscover = (
  api,
  page,
  sortBy,
  voteAverage,
  yearMin,
  yearMax
) => {
  return dispatch => {
    dispatch({ type: FETCH_DISCOVER_BEGIN });
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}&vote_average.gte=${voteAverage}&primary_release_date.gte=${yearMin}-01-01&primary_release_date.lte=${yearMax}-12-12`
    )
      .then(res => res.json())
      .then(discover => {
        if (discover.success === false) {
          alert(discover.status_message);
          dispatch({
            type: FETCH_DISCOVER_FAILURE
          });
        } else {
          dispatch({
            type: FETCH_DISCOVER_SUCCESS,
            payload: discover
          });
        }
      });
  };
};
