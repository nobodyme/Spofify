import React from 'react';
import { millisToMinutesAndSeconds } from '../utils';
import { withRouter } from 'react-router-dom';
import '../styles/components/SongTableItem.css';
import PropTypes from 'prop-types';

function SongListItem(props) {
	const { song, onMouseOverHandler, index, active } = props;

	const onClickHandler = song => {
		props.history.push({
			pathname: `/detail/${song.rank}`,
			state: { song: song }
		});
	};

	return (
		<div
			className={active ? 'songTableItem active' : 'songTableItem'}
			onClick={() => onClickHandler(song)}
			onMouseOver={() => onMouseOverHandler(index)}
		>
			<div className="songTableItem__name">{song.name}</div>
			<div className="songTableItem__artists">{song.artists}</div>
			<div className="songTableItem__duration">
				{millisToMinutesAndSeconds(song.duration_ms)}
			</div>
		</div>
	);
}

SongListItem.propTypes = {
	song: PropTypes.object.isRequired,
	active: PropTypes.bool,
	onMouseOverHandler: PropTypes.func,
	index: PropTypes.number
};

export default withRouter(SongListItem);
