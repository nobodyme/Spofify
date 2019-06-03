import React from 'react';
import '../styles/components/SongTable.css';
import SongTableItem from './SongTableItem';

function SongTable({ songs }) {
	return (
		<div className="songTableWrapper">
			<div className="title">Top 50 Songs</div>
			<div className="table-wrapper">
				<table className="songTable">
					<thead>
						<tr>
							<th scope="col">TITLE</th>
							<th scope="col">ARTIST</th>
							<th scope="col">DURATION</th>
						</tr>
					</thead>
					<tbody>
						{songs.map(song => (
							<SongTableItem key={song._id} song={song} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default SongTable;
