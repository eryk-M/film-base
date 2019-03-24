import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getApi } from "../../actions/api.actions";
import { getGenres } from "../../actions/genres.actions";
import { getDiscover } from "../../actions/discover.actions";
import "../MainStyling.scss";
import "./Discover.scss";
import DiscoverItem from ".././Discover/DiscoverItem/DiscoverItem";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
class Discover extends Component {
  state = {
    sortBy: "popularity.desc",
    voteAverage: 0,
    page: 1,
    results: [],
    totalPages: 0,
    yearMin: 2000,
    yearMax: 2019
  };

  componentDidMount() {
    this.props.getApi();
    this.props.getDiscover(
      this.props.api,
      this.state.page,
      this.state.sortBy,
      this.state.voteAverage,
      this.state.yearMin,
      this.state.yearMax
    );
    this.props.getGenres(this.props.api);
  }
  componentWillReceiveProps(newProps) {
    if (newProps.discover.total_pages !== this.state.totalPages) {
      this.setState({
        totalPages: newProps.discover.total_pages,
        page: newProps.discover.page
      });
    }
  }
  handleGetDiscover = page => {
    this.props.getDiscover(
      this.props.api,
      page,
      this.state.sortBy,
      this.state.voteAverage,
      this.state.yearMin,
      this.state.yearMax
    );
  };

  handlePagination = type => {
    const { page } = this.state;
    switch (type) {
      case "add":
        this.setState({ page: page + 1 });
        this.handleGetDiscover(page);
        break;
      case "minus":
        if (page !== 1) {
          this.setState({ page: page - 1 });
          this.handleGetDiscover(page);
        }
        break;
      default:
        return null;
    }
  };
  handleChange = e => {
    this.setState({ voteAverage: e.target.value });
  };
  handleYearChange = e => {
    this.setState({
      year: e.target.value
    });
  };
  handleSelectChange(e) {
    this.setState({
      sortBy: e.target.value
    });
  }
  onSlide = (render, handle, value, un, percent) => {
    const min = parseInt(value[0].toFixed());
    const max = parseInt(value[1].toFixed());
    this.setState({
      yearMin: min,
      yearMax: max
    });
  };
  render() {
    const discover = this.props.discover.results;
    const btnOff = {
      opacity: 0.5
    };
    return (
      <div className="main">
        <h1 className="main__heading">DISCOVER MOVIES</h1>
        <div className="main__sort">
          <div className="main__sort-range">
            <span>Vote Average</span>
            <span id="rangeValue">{this.state.voteAverage}</span>
            <input
              className="range"
              type="range"
              value={this.state.voteAverage}
              min="0"
              max="10"
              onChange={this.handleChange}
            />
          </div>

          <div className="main__sort-year">
            <span className="main__sort-info--1">
              From: {this.state.yearMin}
            </span>
            <span className="main__sort-info--2">To: {this.state.yearMax}</span>
            <Nouislider
              connect
              start={[2000, 2019]}
              behaviour="tap"
              range={{
                min: [1944],
                max: [2019]
              }}
              onSlide={this.onSlide}
            />
          </div>
          <div className="main__sort-select">
            <select onClick={this.handleSelectChange.bind(this)}>
              <option value="popularity.desc">Popularity DESC</option>
              <option value="popularity.asc">Popularity ASC</option>
              <option value="release_date.desc">Release date DESC</option>
              <option value="release_date.asc">Release date ASC</option>
              <option value="original_title.asc">Original title ASC</option>
              <option value="vote_average.asc">Vote average ASC</option>
            </select>
          </div>
        </div>
        <div className="main__sort-search">
          <button className="main__sort-search-btn">Search</button>
        </div>
        <div className="main__sort-buttons">
          <button
            style={this.state.page === 1 ? btnOff : null}
            onClick={() => {
              this.handlePagination("minus");
              this.handleGetDiscover();
            }}
          >
            Previous
          </button>
          <button
            onClick={() => {
              this.handlePagination("add");
              this.handleGetDiscover();
              // this.plus();
            }}
          >
            Next
          </button>
        </div>
        <p
          style={{
            fontSize: 30
          }}
        >
          Strona: {this.state.page}
          wszystkich stron: {this.props.discover.total_pages}
        </p>

        <div className="main__container">
          <DiscoverItem genres={this.props.genres.genres} discover={discover} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
    api: state.api.api,
    discover: state.discover
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getGenres: bindActionCreators(getGenres, dispatch),
    getApi: bindActionCreators(getApi, dispatch),
    getDiscover: bindActionCreators(getDiscover, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
