import React from 'react';
import '../styles/components/SongTable.css';
import SongTableItem from './SongTableItem';
import PropTypes from 'prop-types';

function SongTable({ songs, cursor, onMouseOverHandler }) {
	return (
		<div className="songTable">
			<div className="songTable__title">Top 50 Songs</div>
			<div className="songTable__table">
				<div className="songTable__header">
					<div className="songTable__header__name">TITLE</div>
					<div className="songTable__header__artist">ARTIST</div>
					<div className="songTable__header__duration">DURATION</div>
				</div>
				{songs.map((song, index) => (
					<SongTableItem
						key={song._id}
						song={song}
						active={cursor === index ? true : false}
						index={index}
						onMouseOverHandler={onMouseOverHandler}
					/>
				))}
			</div>
		</div>
	);
}

SongTable.propTypes = {
	songs: PropTypes.array.isRequired,
	cursor: PropTypes.number,
	onMouseOverHandler: PropTypes.func
};

export default SongTable;
