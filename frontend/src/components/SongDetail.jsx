import React from 'react';
import '../styles/components/SongDetail.css';
import Indicator from './Indicator';
import Loading from './Loading';
import { millisToMinutesAndSeconds, strLengthFormat } from '../utils';
import SongStats from './SongStats';
import trophy from '../assets/trophy.png';
import stopwatch from '../assets/stopwatch.png';
import PropTypes from 'prop-types';

function SongDetail({ error, loading, song }) {
	if (error !== '') {
		return <Indicator text="Oops, something went wrong" />;
	} else if (loading === true) {
		return <Loading />;
	} else {
		return (
			<div className="songDetail">
				<div className="songDetail__header">
					<div className="songDetail__basicHeader">
						<div className="songDetail__title">
							{strLengthFormat(song.name)}
						</div>
						<div className="songDetail__artist">{song.artists}</div>
					</div>
					<div className="songDetail__otherHeader">
						<img
							className="songDetail__image"
							alt="trophy indicator"
							src={trophy}
						/>
						<div className="songDetail__rank">{song.rank}</div>

						<img className="songDetail__img" alt="timer icon" src={stopwatch} />
						<div className="songDetail__duration">
							{millisToMinutesAndSeconds(song.duration_ms)}
						</div>
					</div>
				</div>
				<div className="songDetail__line" />
				<SongStats className="songDetail__stats" song={song} />
			</div>
		);
	}
}

SongDetail.propTypes = {
	song: PropTypes.object.isRequired,
	error: PropTypes.string,
	loading: PropTypes.bool
};

export default SongDetail;
