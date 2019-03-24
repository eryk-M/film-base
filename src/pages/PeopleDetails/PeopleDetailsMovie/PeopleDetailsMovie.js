import React from "react";
import { Link } from "react-router-dom";
import "./PeopleDetailsMovie.scss";
const PeopleDetailsMovie = props => {
  console.log(props.cast);
  // console.log(props.cast);
  const cast = props.cast.map((item, i) => (
    // <div key={i}>{item.title}</div>
    <div key={i} className="people__item swiper-slide">
      <figure className="people__item-image">
        <Link style={{ textDecoration: "none" }} to={`/movies/${item.id}`}>
          <div className="people__item-wrapper">
            {item.poster_path ? (
              <img
                className="people__item-img"
                src={`https://image.tmdb.org/t/p/w185${item.poster_path}`}
                alt=""
              />
            ) : (
              "NO IMAGE FOUND"
            )}

            <h2 className="people__item-heading">
              {item.title}
              <br /> {parseInt(item.release_date)}
            </h2>
          </div>
        </Link>
      </figure>
    </div>
  ));
  //   const people = props.people.map((item, i) => (
  //     <div key={i} className="movie__people swiper-slide">
  //       <figure className="movie__people-image">
  //         <Link style={{ textDecoration: "none" }} to={`/people/${item.id}`}>
  //           <div className="movie__people-wrapper">
  //             <img
  //               className="movie__people-img"
  //               src={`https://image.tmdb.org/t/p/w185${item.profile_path}`}
  //               alt=""
  //             />

  //             <h2 className="movie__people-heading">{item.name}</h2>
  //           </div>
  //         </Link>
  //       </figure>
  //     </div>
  //   ));

  return <>{cast}</>;
};

export default PeopleDetailsMovie;
