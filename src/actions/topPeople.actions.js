export const FETCH_TOP_PEOPLE = "FETCH_TOP_PEOPLE";

export const getTopPeople = api => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${api}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(topPeople => {
        dispatch({
          type: FETCH_TOP_PEOPLE,
          payload: topPeople
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
