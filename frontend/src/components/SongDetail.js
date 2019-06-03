import React from 'react';
import '../styles/components/SongDetail.css';
import Indicator from './Indicator';
import Loading from './Loading';
import { millisToMinutesAndSeconds, strLengthFormat } from '../utils';
import SongStats from './SongStats';
import trophy from '../assets/trophy.png';
import stopwatch from '../assets/stopwatch.png';

function SongDetail({ error, loading, song }) {
	if (error !== '') {
		return <Indicator text="Oops, something went wrong" />;
	} else if (loading === true) {
		return <Loading />;
	} else {
		return (
			<div className="songDetail">
				<div className="songHeader">
					<div className="basicInfoHeader">
						<div className="basicInfoHeader__title">
							{strLengthFormat(song.name)}
						</div>
						<div className="basicInfoHeader__artist">{song.artists}</div>
					</div>
					<div className="otherInfoHeader">
						<img className="rank__image" alt="trophy indicator" src={trophy} />
						<div className="rank__number">{song.rank}</div>

						<img
							className="durationDetail__img"
							alt="timer icon"
							src={stopwatch}
						/>
						<div className="durationDetail__number">
							{millisToMinutesAndSeconds(song.duration_ms)}
						</div>
					</div>
				</div>
				<div className="line" />
				<SongStats className="songStats" song={song} />
			</div>
		);
	}
}

export default SongDetail;
