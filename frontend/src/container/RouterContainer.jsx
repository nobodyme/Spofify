import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Loading from '../components/Loading';

const FetchSong = lazy(() => import('./FetchSong'));
const FetchSongDetail = lazy(() => import('./FetchSongDetail'));
const Indicator = lazy(() => import('../components/Indicator'));

function RouterContainer() {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Switch>
					<Route path="/" exact component={FetchSong} />
					<Route path="/detail/:rank" component={FetchSongDetail} />
					<Route
						render={props => (
							<Indicator {...props} text="404, Page not Found" />
						)}
					/>
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}

export default RouterContainer;
