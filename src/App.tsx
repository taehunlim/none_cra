import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import "./styles.scss"

import {Home} from './pages';

const App:React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact render={props => <Home {...props}/> } />
				<Redirect to="/"/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;