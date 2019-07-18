import React from 'react';
import FetchSong from './container/FetchSong';
import FetchSongDetail from './container/FetchSongDetail';
import Indicator from './components/Indicator';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={FetchSong} />
				<Route path="/detail/:rank" component={FetchSongDetail} />
				<Route
					render={props => <Indicator {...props} text="404, Page not Found" />}
				/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
