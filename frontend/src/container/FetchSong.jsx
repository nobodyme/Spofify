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
			loading: true,
			cursor: 0
		};
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		this.fetchSongList = this.fetchSongList.bind(this);
		this.searchSongList = this.searchSongList.bind(this);
		this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
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
			this.setState({
				error: error.response ? error.response.data.err : error.message,
				loading: false
			});
		}
	}

	async searchSongList(searchInput) {
		try {
			const { data } = await axios.get('/songs/search', {
				params: { query: searchInput }
			});
			this.setState({ songs: data.songs, searchInput, cursor: 0 });
		} catch (error) {
			this.setState({
				error: error.response ? error.response.data.err : error.message
			});
		}
	}

	componentDidMount() {
		this.fetchSongList();
	}

	onChangeHandler(e) {
		const searchInput = e.target.value;
		this.searchSongList(searchInput);
	}

	onKeyUpHandler(e) {
		const { cursor, songs } = this.state;
		if (e.keyCode === 13) {
			this.props.history.push({
				pathname: `/detail/${songs[cursor].rank}`,
				state: { song: songs[cursor] }
			});
		}
		if (e.keyCode === 38 && cursor > 0) {
			this.setState(prevState => ({
				cursor: prevState.cursor - 1
			}));
		}
		if (e.keyCode === 40 && cursor < songs.length - 1) {
			this.setState(prevState => ({
				cursor: prevState.cursor + 1
			}));
		}
	}

	onMouseOverHandler(cursor) {
		this.setState({ cursor: cursor });
	}

	render() {
		return (
			<SearchableSongTable
				{...this.state}
				onChangeHandler={this.onChangeHandler}
				onKeyUpHandler={this.onKeyUpHandler}
				onMouseOverHandler={this.onMouseOverHandler}
			/>
		);
	}
}

export default FetchSong;
