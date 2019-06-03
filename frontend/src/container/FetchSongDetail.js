import React, { Component } from "react";
import axios from "../config";
import SongDetail from "../components/SongDetail";

// Different approach by refactoring out certain functions and leveraging arrow functions + async/await

class FetchSongDetail extends Component {
  state = {
    song: [],
    error: "",
    loading: true
  };

  fetchSongByRank = async rank => {
    try {
      this.setState({ loading: true });
      const { data } = axios.get("/songs/detail", {
        params: { rank }
      });

      this.setState({
        song: data.song[0],
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message
      });
    }
  };

  componentDidUpdate({ match: prevMatch }) {
    // Handle when the rank changes in the params to requery
    const { match } = this.props;
    if (match.params.rank !== prevMatch.params.rank) {
      this.fetchSongByRank(match.params.rank);
    }
  }

  componentDidMount() {
    const {
      location: { state },
      match
    } = this.props;

    if (state && state.song) {
      this.setState({
        loading: false,
        song: state.song
      });
    } else {
      this.fetchSongByRank(match.params.rank);
    }
  }

  render() {
    return (
      <SongDetail
        error={this.state.error}
        loading={this.state.loading}
        song={this.state.song}
      />
    );
  }
}

export default FetchSongDetail;
