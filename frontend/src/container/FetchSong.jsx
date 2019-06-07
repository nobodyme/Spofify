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
		this.fetchSongList = this.fetchSongList.bind(this);
		this.searchSongList = this.searchSongList.bind(this);
	}

	async fetchSongList() {
		try {
			this.setState({ loading: true });
			const { data } = await axios.get('/songs/list');
			this.setState({
				songs: data.songs,
				loading: false,
				cursor: 0
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
			this.setState({ songs: data.songs, searchInput, cursor: 0 });
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

	render() {
		return (
			<SearchableSongTable
				{...this.state}
				onChangeHandler={this.onChangeHandler}
			/>
		);
	}
}

export default FetchSong;
