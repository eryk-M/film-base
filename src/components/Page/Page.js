import React from "react";

import { Route, Switch } from "react-router-dom";

import Upcoming from "../../pages/Upcoming/Upcoming";
import TopMovies from "../../pages/TopMovies/TopMovies";
import TopPeople from "../../pages/TopPeople/TopPeople";
import TopTV from "../../pages/TopTV/TopTV";
import SearchMovies from "../../pages/SearchMovies/SearchMovies";
import MovieDetails from "../../pages/MovieDetails/MovieDetails";
import PeopleDetails from "../../pages/PeopleDetails/PeopleDetails";
import Discover from "../../pages/Discover/Discover";
import NotFound from "../../pages/NotFound/NotFound";
import Profile from "../../pages/Profile/Profile";

const Page = () => {
  // console.log(this);
  return (
    <>
      <Switch>
        <Route path="/" exact component={Upcoming} />
        <Route path="/movies/top" exact component={TopMovies} />
        <Route path="/people/top" exact component={TopPeople} />
        <Route path="/tv/top" exact component={TopTV} />
        <Route path="/results" exact component={SearchMovies} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route path="/people/:id" exact component={PeopleDetails} />
        <Route path="/discover" exact component={Discover} />
        <Route path="/profile/:status" exact component={Profile} />

        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default Page;
