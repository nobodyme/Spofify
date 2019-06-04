import React, { Component } from 'react';
import axios from '../config';
import SearchableSongTable from '../components/SearchableSongTable';

class FetchSong extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songs: [],
			searchInput: '',
			error: '',
			loading: true
		};
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		this.fetchSongList = this.fetchSongList.bind(this);
		this.searchSongList = this.searchSongList.bind(this);
	}

	async fetchSongList() {
		try {
			this.setState({ loading: true });
			const { data } = await axios.get('/songs/list');
			this.setState({
				songs: data.songs,
				loading: false
			});
		} catch (error) {
			throw error;
		}
	}

	async searchSongList(searchInput) {
		try {
			const { data } = await axios.get('/songs/search', {
				params: { query: searchInput }
			});
			this.setState({ songs: data.songs, searchInput });
		} catch (error) {
			throw error;
		}
	}

	componentDidMount() {
		try {
			this.fetchSongList();
		} catch (error) {
			this.setState({
				error: error.message,
				loading: false
			});
		}
	}

	onChangeHandler(e) {
		try {
			const searchInput = e.target.value;
			this.searchSongList(searchInput);
		} catch (error) {
			this.setState({ error: error.message });
		}
	}

	onKeyUpHandler(e) {
		const songs = this.state.songs;
		if (e.keyCode === 13 && songs.length === 1) {
			this.props.history.push({
				pathname: `/detail/${songs[0].rank}`,
				state: { song: songs[0] }
			});
		}
	}

	render() {
		return (
			<SearchableSongTable
				error={this.state.error}
				songs={this.state.songs}
				loading={this.state.loading}
				searchInput={this.state.searchInput}
				onChangeHandler={this.onChangeHandler}
				onKeyUpHandler={this.onKeyUpHandler}
			/>
		);
	}
}

export default FetchSong;
