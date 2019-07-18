import React, { useState, useEffect } from 'react';
import axios from '../config';
import SongDetail from '../components/SongDetail';
import ErrorBoundary from '../components/ErrorBoundary';

function FetchSongDetail({ location, match }) {
	const [song, setSong] = useState({});
	const [error, setError] = useState('');
	const [isLoading, setisLoading] = useState(true);

	const fetchSongByRank = async rank => {
		try {
			setisLoading(true);
			const { data } = await axios.get('/songs/detail', {
				params: { rank: rank }
			});
			setSong(data.song[0]);
			setisLoading(false);
		} catch (error) {
			setError(error.response ? error.response.data.err : error.message);
			setisLoading(false);
		}
	};

	useEffect(() => {
		if (location.state) {
			setisLoading(false);
			setSong(location.state.song);
		} else {
			fetchSongByRank(match.params.rank);
		}
	}, [location.state, match]);

	return (
		<ErrorBoundary>
			<SongDetail song={song} error={error} isLoading={isLoading} />
		</ErrorBoundary>
	);
}

export default FetchSongDetail;
