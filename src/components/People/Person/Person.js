import React from "react";

const API = "2a5d7298a94408e98274cd600f658034";

const Person = props => {
  const { people } = props;

  //   const personImage = `
  //   https://api.themoviedb.org/3/person/${person.id}/images?api_key=${API}`;

  const persons = people.map(person => (
    <div key={person.id}>
      <h2>{person.name}</h2>
      <p>{person.popularity}</p>
      <div>
        <img
          src={`
          https://image.tmdb.org/t/p/original/${person.profile_path}`}
          alt={person.name}
        />
      </div>
    </div>
  ));

  return <>{persons}</>;
};

export default Person;
