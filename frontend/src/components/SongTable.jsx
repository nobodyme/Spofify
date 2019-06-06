import React from 'react';
import '../styles/components/SongTable.css';
import SongTableItem from './SongTableItem';
import PropTypes from 'prop-types';

function SongTable({ songs, cursor, onMouseOverHandler }) {
	return (
		<div className="songTable">
			<div className="songTable__title">Top 50 Songs</div>
			<div className="songTable__wrapper">
				<table className="songTable__table">
					<thead>
						<tr>
							<th scope="col">TITLE</th>
							<th scope="col">ARTIST</th>
							<th scope="col">DURATION</th>
						</tr>
					</thead>
					<tbody>
						{songs.map((song, index) => (
							<SongTableItem
								key={song._id}
								song={song}
								active={cursor === index ? true : false}
								index={index}
								onMouseOverHandler={onMouseOverHandler}
							/>
						))}
					</tbody>
				</table>
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
