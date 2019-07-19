import React, { useState, useEffect } from 'react';
import axios from '../config';
import SearchableSongTable from '../components/SearchableSongTable';
import ErrorBoundary from '../components/ErrorBoundary';

function FetchSong(props) {
	const [songs, setSongs] = useState('');
	const [searchInput, setSearchInput] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setisLoading] = useState(true);
	const [cursor, setCursor] = useState(0);

	const fetchSongList = async () => {
		try {
			setisLoading(true);
			const { data } = await axios.get('/songs/list');
			setSongs(data.songs);
			setisLoading(false);
			setCursor(0);
		} catch (error) {
			setError(error.response ? error.response.data.err : error.message);
			setisLoading(false);
		}
	};

	const searchSongList = async searchInput => {
		try {
			const { data } = await axios.get('/songs/search', {
				params: { query: searchInput }
			});
			setSongs(data.songs);
			setSearchInput(searchInput);
			setCursor(0);
		} catch (error) {
			setError(error.response ? error.response.data.err : error.message);
		}
	};

	const onChangeHandler = e => {
		const searchInput = e.target.value;
		searchSongList(searchInput);
	};

	const onKeyUpHandler = e => {
		if (e.keyCode === 13) {
			props.history.push({
				pathname: `/detail/${songs[cursor].rank}`,
				state: { song: songs[cursor] }
			});
		}
		if (e.keyCode === 38 && cursor > 0) {
			setCursor(c => c - 1);
		}
		if (e.keyCode === 40 && cursor < songs.length - 1) {
			setCursor(c => c + 1);
		}
	};

	const onMouseOverHandler = cursor => {
		setCursor(cursor);
	};

	useEffect(() => {
		fetchSongList();
	}, []);

	return (
		<ErrorBoundary>
			<SearchableSongTable
				songs={songs}
				searchInput={searchInput}
				error={error}
				loading={isLoading}
				cursor={cursor}
				onChangeHandler={onChangeHandler}
				onKeyUpHandler={onKeyUpHandler}
				onMouseOverHandler={onMouseOverHandler}
			/>
		</ErrorBoundary>
	);
}

export default FetchSong;
