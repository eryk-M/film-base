export const FETCH_TOP_PEOPLE = "FETCH_TOP_PEOPLE";

const api = "2a5d7298a94408e98274cd600f658034";

export const getTopPeople = () => {
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
