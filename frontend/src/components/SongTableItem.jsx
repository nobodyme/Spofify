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
		const { song, onMouseOverHandler, index } = this.props;

		return (
			<tr
				className={this.props.active ? 'songTableItem active' : 'songTableItem'}
				onClick={() => this.onClickHandler(song)}
				onMouseOver={() => onMouseOverHandler(index)}
			>
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
	song: PropTypes.object.isRequired,
	active: PropTypes.bool,
	onMouseOverHandler: PropTypes.func,
	index: PropTypes.number
};

export default withRouter(SongListItem);
