import React from 'react';
import '../styles/components/SongStats.css';
import StatBar from './StatBar';
import { textFormat } from '../utils';

function SongStats({ song }) {
	const maxValue = [0, 0, 0, 1, 1, 11, 20, 10, 1, 1, 1, 1, 1, 200, 0, 10, 0];

	return (
		<div className="songStats">
			{Object.keys(song).map((songAttr, index) => {
				if (maxValue[index] !== 0) {
					return (
						<div key={songAttr} className="songStats__item">
							<div className="songStats__itemHeader">
								<div className="songStats__title">{textFormat(songAttr)}</div>
								<div className="songStats__value">{song[songAttr]}</div>
							</div>
							<StatBar
								song={song}
								songAttr={songAttr}
								maxValue={maxValue[index]}
							/>
						</div>
					);
				} else {
					return <React.Fragment key={songAttr} />;
				}
			})}
		</div>
	);
}

export default SongStats;
