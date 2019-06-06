import React from 'react';
import Indicator from './Indicator';
import SongTable from './SongTable';
import Loading from './Loading';
import SearchBar from './SearchBar';
import '../styles/components/SearchableSongTable.css';
import PropTypes from 'prop-types';

function SearchableSongTable({
	error,
	songs,
	cursor,
	loading,
	searchInput,
	onChangeHandler,
	onKeyUpHandler,
	onMouseOverHandler
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
				<SearchBar
					value={searchInput}
					onChangeHandler={onChangeHandler}
					onKeyUpHandler={onKeyUpHandler}
				/>
				<Indicator text="Oops, song not found" />
			</>
		);
	} else {
		componentToRender = (
			<>
				<SearchBar
					value={searchInput}
					onChangeHandler={onChangeHandler}
					onKeyUpHandler={onKeyUpHandler}
				/>
				<SongTable
					songs={songs}
					cursor={cursor}
					onMouseOverHandler={onMouseOverHandler}
				/>
			</>
		);
	}

	return <div className="searchableSongTable">{componentToRender}</div>;
}

SearchableSongTable.propType = {
	loading: PropTypes.bool,
	error: PropTypes.string,
	songs: PropTypes.object.isRequired,
	searchInput: PropTypes.string.isRequired,
	cursor: PropTypes.number,
	onChangeHandler: PropTypes.func,
	onKeyUpHandler: PropTypes.func,
	onMouseOverHandler: PropTypes.func
};

export default SearchableSongTable;
