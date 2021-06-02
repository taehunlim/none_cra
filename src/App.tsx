import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {SWRConfig} from 'swr';
import {api} from './utils/api';

import "./styles.scss"

import {Home} from './pages';

const App:React.FC = () => {
	const swrConfig = {
		// useSWR에 url만 적어도 axios의 response.data 값이 return
		fetcher: (url: string, params: object) => 
			api
				.get(url, { params })
				.then(response => response.data)
	}

	return (
		<SWRConfig value={swrConfig}>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact render={props => <Home {...props} />} />
					<Redirect to="/" />
				</Switch>
			</BrowserRouter>
		</SWRConfig>
	);
};

export default App;