export const PEOPLE_MOVIE_CREDITS = "PEOPLE_MOVIE_CREDITS";

export const getPeopleCredits = (person_id, api) => {
  return dispatch => {
    fetch(
      `https://api.themoviedb.org/3/person/${person_id}/movie_credits?api_key=${api}&language=en-US
      `
    )
      .then(res => res.json())
      .then(peopleCredits => {
        dispatch({
          type: PEOPLE_MOVIE_CREDITS,
          payload: peopleCredits
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
