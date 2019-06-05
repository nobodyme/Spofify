import React, { Component } from 'react';
import { millisToMinutesAndSeconds } from '../utils';
import { withRouter } from 'react-router-dom';
import '../styles/components/SongTableItem.css';
import PropTypes from 'prop-types';

class SongListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rank: ''
		};
		this.onClickHandler = this.onClickHandler.bind(this);
	}

	onClickHandler(song) {
		this.setState({ rank: song.rank });
		this.props.history.push({
			pathname: `/detail/${song.rank}`,
			state: { song: song }
		});
	}

	render() {
		const song = this.props.song;
		return (
			<tr className="songTableItem" onClick={() => this.onClickHandler(song)}>
				<td>{song.name}</td>
				<td>{song.artists}</td>
				<td className="songTableItem__duration">
					{millisToMinutesAndSeconds(song.duration_ms)}
				</td>
			</tr>
		);
	}
}

SongListItem.propTypes = {
	song: PropTypes.object.isRequired
};

export default withRouter(SongListItem);
