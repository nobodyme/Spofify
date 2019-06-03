import React, { Component } from 'react';
import { millisToMinutesAndSeconds } from '../utils';
import { withRouter } from 'react-router-dom';
import '../styles/components/SongTableItem.css';

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
		return (
			<tr
				className="songTableItem"
				onClick={() => this.onClickHandler(this.props.song)}
			>
				<td>{this.props.song.name}</td>
				<td>{this.props.song.artists}</td>
				<td className="songTableItem__duration">
					{millisToMinutesAndSeconds(this.props.song.duration_ms)}
				</td>
			</tr>
		);
	}
}

export default withRouter(SongListItem);
