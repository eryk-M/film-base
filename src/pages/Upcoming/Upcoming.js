import React, { Component } from "react";
import UpcomingItem from "./UpcomingItem/UpcomingItem";
import "./Upcoming.scss";

// import { fetchMovies } from "../../actions/moviesActions";
import { connect } from "react-redux";

import moviesActions from "../../actions/moviesActions";
import postMoviesUpcoming from "../../actions/moviesActions";

const api = "2a5d7298a94408e98274cd600f658034";

class Upcoming extends Component {
  state = {
    items: [],
    visible: 10
  };

  componentDidMount() {
    // this.props.postMoviesUpcoming(
    //   `https://api.themoviedb.org/3/movie/upcoming?api_key=${
    //     this.props.apiKey
    //   }&language=en-US&page=1`
    // );
    fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          items: data.results
        });
        console.log(data.results);
      })
      .catch(error => console.log(error));
  }

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 10 };
    });
  };

  render() {
    // console.log(this.props.postMoviesUpcoming());
    return (
      <div className="upcoming">
        <h1 className="upcoming__heading">Upcoming</h1>
        <div className="upcoming__container">
          <UpcomingItem items={this.state.items} visible={this.state.visible} />
          {this.state.visible < this.state.items.length && (
            <button
              style={{
                padding: "1rem 1rem",
                color: "black",
                margin: "0 auto"
              }}
              onClick={this.loadMore}
            >
              Load more
            </button>
          )}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   apiKey: state.PostMDBConfig.apiKey,
//   moviesUpcoming: state.postMoviesUpcoming
// });

// const mapDispatchToProps = dispatch => ({
//   moviesActions: url => dispatch(moviesActions(url)),
//   postMoviesUpcoming: url => dispatch(postMoviesUpcoming(url))
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
//   // { fetchMovies }
// )(Upcoming);

export default Upcoming;
