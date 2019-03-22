export const SEARCH_RESULTS = "SEARCH_RESULTS";

export const getSearchResults = (query, api, page) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&page=1&include_adult=false&query=${query}&page=${page}
      `
    )
      .then(res => res.json())
      .then(searchResults => {
        dispatch({
          loaded: false,
          type: SEARCH_RESULTS,
          payload: searchResults
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
