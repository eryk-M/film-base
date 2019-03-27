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
import Loader from "../../components/Loader/Loader";

class Discover extends Component {
  state = {
    sortBy: "popularity.desc",
    voteAverage: 5,
    page: 1,
    results: [],
    totalPages: 0,
    yearMin: 2000,
    yearMax: 2019,
    date: new Date().getFullYear(),
    error: false
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

  componentDidUpdate() {
    if (this.props.discover.total_pages !== this.state.totalPages) {
      this.setState(() => ({
        totalPages: this.props.discover.total_pages,
        page: this.props.discover.page
      }));
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
        if (page !== this.state.totalPages) {
          this.setState({ page: page + 1 });
          this.handleGetDiscover(page + 1);
        }
        break;
      case "minus":
        if (page !== 1) {
          this.setState({ page: page - 1 });
          this.handleGetDiscover(page - 1);
        }
        break;
      default:
        return null;
    }
  };
  handleChange = e => {
    this.setState({ voteAverage: e.target.value });
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

  handleYearMinChange = e => {
    this.setState({
      yearMin: e.target.value
    });
  };
  handleYearMaxChange = e => {
    this.setState({
      yearMax: e.target.value
    });
  };
  handleSearch = page => {
    if (
      parseInt(this.state.yearMin) < 1944 ||
      parseInt(this.state.yearMax) > this.state.date
    ) {
      this.setState({
        error: true
      });
    } else if (
      // 2000 > 1944 - true
      parseInt(this.state.yearMin) >= 1944 ||
      // 2030 < 2019 - false
      parseInt(this.state.yearMax) <= this.state.date
    ) {
      this.props.getDiscover(
        this.props.api,
        1,
        this.state.sortBy,
        this.state.voteAverage,
        this.state.yearMin,
        this.state.yearMax
      );
      this.setState({
        error: false,
        page: 1
      });
    }
  };

  render() {
    const { date } = this.state;
    const discover = this.props.discover.results;
    const btnOff = {
      opacity: 0.2,
      cursor: "default",
      boxShadow: `0 0.2rem 0.2rem rgba(0, 0, 0, 0.5)`,
      transform: "translateY(0.1rem)"
    };
    // const date = new Date().getFullYear();
    // console.log(date);

    return (
      <div className="main">
        <h1 className="main__heading">DISCOVER MOVIES</h1>
        <div className="main__sort">
          <div className="main__sort-range">
            <span>Vote Average ></span>
            <span id="rangeValue">{this.state.voteAverage}</span>
            <input
              className="range"
              type="range"
              value={this.state.voteAverage}
              min="1"
              max="9"
              onChange={this.handleChange}
            />
          </div>

          <div className="main__sort-year">
            <p
              className="main__sort-year-error"
              style={this.state.error ? { opacity: 1 } : { opacity: 0 }}
            >
              You must provide years between 1944 and {date}!
            </p>
            <span className="main__sort-info--1">
              From:{" "}
              <input
                className="main__sort-info-input"
                type="number"
                value={this.state.yearMin}
                min="1944"
                onChange={this.handleYearMinChange}
              />
            </span>
            <span className="main__sort-info--2">
              To:{" "}
              <input
                className="main__sort-info-input"
                type="number"
                max={date}
                min={this.state.yearMin}
                value={this.state.yearMax}
                onChange={this.handleYearMaxChange}
              />
            </span>
            <Nouislider
              start={[this.state.yearMin, this.state.yearMax]}
              behaviour="tap-drag"
              connect
              range={{
                min: [1944],
                max: [this.state.yearMax]
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
          <button onClick={this.handleSearch} className="main__sort-search-btn">
            Search
          </button>
        </div>
        <div className="main__sort-buttons">
          <button
            style={this.state.page === 1 ? btnOff : null}
            onClick={() => {
              this.handlePagination("minus");
              // this.handleGetDiscover();
            }}
          >
            Previous
          </button>
          <button
            style={this.state.page === this.state.totalPages ? btnOff : null}
            onClick={() => {
              this.handlePagination("add");
              // this.handleGetDiscover();
              // this.plus();
            }}
          >
            Next
          </button>
        </div>
        <p className="main__sort-pages">
          Actual page: <span>{this.state.page}</span> Total pages:{" "}
          <span>{this.props.discover.total_pages}</span> Total results:{" "}
          <span>{this.props.discover.total_results}</span>
        </p>
        {this.props.discover.loaded ? (
          <div className="main__container">
            <DiscoverItem
              genres={this.props.genres.genres}
              discover={discover}
            />
          </div>
        ) : (
          <Loader
            style={{
              margin: "0 auto",
              width: "100%"
            }}
          />
        )}
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
