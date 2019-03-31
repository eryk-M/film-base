export const SEARCH_RESULTS_BEGIN = "SEARCH_RESULTS_BEGIN";
export const SEARCH_RESULTS_SUCCESS = "SEARCH_RESULTS_SUCCESS";
export const SEARCH_RESULTS_FAILURE = "SEARCH_RESULTS_FAILURE";

export const getSearchResults = (query, api, page) => {
  return dispatch => {
    dispatch({ type: SEARCH_RESULTS_BEGIN });
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&page=1&include_adult=false&query=${query}&page=${page}
      `
    )
      .then(res => res.json())
      .then(searchResults => {
        if (searchResults.success === false) {
          alert(searchResults.status_message);
          dispatch({
            type: SEARCH_RESULTS_FAILURE
          });
        } else {
          dispatch({
            type: SEARCH_RESULTS_SUCCESS,
            payload: searchResults
          });
        }
      });
  };
};
