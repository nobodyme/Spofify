import React, { Component } from 'react';
import '../styles/components/SongTable.css';
import SongTableItem from './SongTableItem';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class SongTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cursor: 0
		};

		this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
	}

	onKeyUpHandler(e) {
		const { songs } = this.props;
		const { cursor } = this.state;

		if (e.keyCode === 13) {
			this.props.history.push({
				pathname: `/detail/${songs[cursor].rank}`,
				state: { song: songs[cursor] }
			});
		}
		if (e.keyCode === 38 && cursor > 0) {
			this.setState(prevState => ({
				cursor: prevState.cursor - 1
			}));
		}
		if (e.keyCode === 40 && cursor < songs.length - 1) {
			this.setState(prevState => ({
				cursor: prevState.cursor + 1
			}));
		}
	}

	onMouseOverHandler(cursor) {
		this.setState({ cursor });
	}

	render() {
		const { songs } = this.props;
		const { cursor } = this.state;
		return (
			<div className="songTable">
				<div className="songTable__title">Top 50 Songs</div>
				<div className="songTable__wrapper">
					<table
						tabindex="0"
						className="songTable__table"
						onKeyUp={this.onKeyUpHandler}
					>
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
									onMouseOverHandler={this.onMouseOverHandler}
								/>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

SongTable.propTypes = {
	songs: PropTypes.array.isRequired,
	cursor: PropTypes.number
};

export default withRouter(SongTable);
