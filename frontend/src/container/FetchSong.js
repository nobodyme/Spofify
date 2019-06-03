import React, { Component } from "react";
import axios from "../config";
import SearchableSongTable from "../components/SearchableSongTable";

class FetchSong extends Component {
  /*
		You can now just add instance variables onto the class itself
		If you do need `props` you can just use `this.props` here as you would
	 */
  state = {
    songs: [],
    searchInput: "",
    error: "",
    loading: true
  };

  fetchSongsList = async () => {
    try {
      this.setState({ loading: true });
      const { data } = axios.get("/songs/list");
      this.setState({
        songs: data.songs,
        loading: false
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false
      });
    }
  };

  searchSongs = query => {
    try {
      const { data } = axios.get("/songs/search", { params: { query } });
      this.setState({
        songs: data.songs,
        loading: false
      });
    } catch (error) {
      // This just keeps consistency with try/catch and re-throws the error so it can be caught by the caller `onChangeHandler`
      throw error;
    }
  };

  /*
		Instead of using `bind` in the constructor you can use arrow functions
		which do not have their own `this` scope.
	 */
  onChangeHandler = e => {
    try {
      const searchInput = e.target.value;
      if (searchInput) {
        const { data } = this.searchSongs(searchInput);
        this.setState({
          songs: data.songs,
          searchInput
        });
      } else {
        this.setState({
          searchInput
        });
      }
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  componentDidMount() {
    this.fetchSongsList();
  }

  render() {
    // Since you just use all the state you can just spread the state into the component
    return (
      <SearchableSongTable
        {...this.state}
        onChangeHandler={this.onChangeHandler}
      />
    );
  }
}

export default FetchSong;
