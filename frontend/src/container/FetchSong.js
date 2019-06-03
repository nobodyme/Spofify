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
	}
	componentDidMount() {
		this.setState({ loading: true });
		axios
			.get('/songs/list')
			.then(response => {
				this.setState({
					songs: response.data.songs,
					loading: false
				});
			})
			.catch(error => {
				this.setState({
					error: error.message,
					loading: false
				});
			});
	}
	onChangeHandler(e) {
		axios
			.get('/songs/search', { params: { query: e.target.value } })
			.then(response => {
				this.setState({ songs: response.data.songs });
			})
			.catch(error => {
				this.setState({ error: error.message });
			});
		this.setState({ searchInput: e.target.value });
	}
	render() {
		return (
			<SearchableSongTable
				error={this.state.error}
				songs={this.state.songs}
				loading={this.state.loading}
				searchInput={this.state.searchInput}
				onChangeHandler={this.onChangeHandler}
			/>
		);
	}
}

export default FetchSong;
