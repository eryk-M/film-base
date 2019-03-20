import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { getGenres } from "../../actions/genres.actions";
import { getTopMovies } from "../../actions/topMovies.actions";
import TopMoviesItem from "./TopMoviesItem/TopMoviesItem";
import LoadMore from "../../components/LoadMore/LoadMore";
import "../MainStyling.scss";

class TopMovies extends Component {
  state = {
    visible: 10
  };
  componentDidMount() {
    this.props.getTopMovies();
    this.props.getGenres();
  }

  //DO PRZEMYSLENIA, PO CHUK DWA RAZY TO SAMO DEBILU

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 10 };
    });
  };

  render() {
    const topMovies = this.props.topMovies.results;
    return (
      <div className="main">
        <h1 className="main__heading">Top rated movies</h1>
        <div className="main__container">
          {this.props.topMovies.loaded ? null : <Loader />}

          <TopMoviesItem
            genres={this.props.genres.genres}
            movies={topMovies}
            visible={this.state.visible}
          />

          {this.state.visible < topMovies.length && (
            <LoadMore click={this.loadMore} /> /* < I TO */
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    topMovies: state.topMovies,
    loaded: state.loaded
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGenres: bindActionCreators(getGenres, dispatch),
    getTopMovies: bindActionCreators(getTopMovies, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMovies);
