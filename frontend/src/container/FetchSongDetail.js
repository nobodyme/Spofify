import React, { Component } from 'react';
import axios from '../config';
import SongDetail from '../components/SongDetail';

class FetchSongDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			song: [],
			error: '',
			loading: true
		};
	}
	componentDidMount() {
		if (this.props.location.state) {
			this.setState({ loading: false, song: this.props.location.state.song });
		} else {
			this.setState({ loading: true });
			axios
				.get('/songs/detail', {
					params: { rank: this.props.match.params.rank }
				})
				.then(response => {
					this.setState({
						song: response.data.song[0],
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
