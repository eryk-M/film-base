import React from "react";

import { Route, Switch } from "react-router-dom";

import Upcoming from "../../pages/Upcoming/Upcoming";
import TopMovies from "../../pages/TopMovies/TopMovies";
import TopPeople from "../../pages/TopPeople/TopPeople";
import TopTV from "../../pages/TopTV/TopTV";
import SearchMovies from "../../pages/SearchMovies/SearchMovies";
import MovieDetails from "../../pages/MovieDetails/MovieDetails";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Upcoming} />
        <Route path="/movies/top" component={TopMovies} />
        <Route path="/people/top" component={TopPeople} />
        <Route path="/tv/top" component={TopTV} />
        <Route path="/results" component={SearchMovies} />
        <Route path="/movies/:id" component={MovieDetails} />
      </Switch>
    </>
  );
};

export default Page;
