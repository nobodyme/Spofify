import React from 'react';
import '../styles/components/SongStats.css';
import StatBar from './StatBar';
import { textFormat } from '../utils';

function SongStats({ song }) {
	const maxValue = [0, 0, 0, 1, 1, 11, 20, 10, 1, 1, 1, 1, 1, 200, 0, 10, 0];
	let i = -1;

	return (
		<div className="songStats">
			{Object.keys(song).map(songAttr => {
				i++;
				if (maxValue[i] !== 0) {
					return (
						<div className="statItem">
							<div className="statItemHeader">
								<div className="statTitle">{textFormat(songAttr)}</div>
								<div className="statValue">{song[songAttr]}</div>
							</div>
							<StatBar song={song} songAttr={songAttr} maxValue={maxValue[i]} />
						</div>
					);
				} else {
					return <></>;
				}
			})}
		</div>
	);
}

export default SongStats;
