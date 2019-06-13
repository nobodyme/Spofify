import React, { Component } from 'react';
import axios from '../config';
import SongDetail from '../components/SongDetail';

class FetchSongDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			song: {},
			error: '',
			loading: true
		};
		this.fetchSongByRank = this.fetchSongByRank.bind(this);
	}

	async fetchSongByRank(rank) {
		try {
			this.setState({ loading: true });
			const { data } = await axios.get('/songs/detail', {
				params: { rank: rank }
			});
			this.setState({
				song: data.song[0],
				loading: false
			});
		} catch (error) {
			this.setState({
				error: error.message,
				loading: false
			});
		}
	}

	componentDidMount() {
		const { location, match } = this.props;
		if (location.state) {
			this.setState({ loading: false, song: location.state.song });
		} else {
			this.fetchSongByRank(match.params.rank);
		}
	}

	render() {
		return <SongDetail {...this.state} />;
	}
}

export default FetchSongDetail;
