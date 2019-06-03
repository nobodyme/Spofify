import React, { Component } from 'react';
import FetchSong from './FetchSong';
import FetchSongDetail from './FetchSongDetail';
import { BrowserRouter, Route } from 'react-router-dom';

class RouterContainer extends Component {
	render() {
		return (
			<BrowserRouter>
				<Route path="/" exact component={FetchSong} />
				<Route path="/detail/:rank" component={FetchSongDetail} />
			</BrowserRouter>
		);
	}
}

export default RouterContainer;
