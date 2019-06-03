import React from 'react';
import Indicator from './Indicator';
import SongTable from './SongTable';
import Loading from './Loading';
import SearchBar from './SearchBar';
import '../styles/components/SearchableSongTable.css';

function SearchableSongTable({
	error,
	songs,
	loading,
	searchInput,
	onChangeHandler
}) {
	const songsFound = songs.length;
	let componentToRender;

	if (error !== '') {
		componentToRender = <Indicator text="Oops, something went wrong" />;
	} else if (loading) {
		componentToRender = <Loading />;
	} else if (songsFound === 0) {
		componentToRender = (
			<>
				<SearchBar value={searchInput} onChangeHandler={onChangeHandler} />
				<Indicator text="Oops, song not found" />
			</>
		);
	} else {
		componentToRender = (
			<>
				<SearchBar value={searchInput} onChangeHandler={onChangeHandler} />
				<SongTable songs={songs} />
			</>
		);
	}

	return <div className="searchableSongTable">{componentToRender}</div>;
}

export default SearchableSongTable;
