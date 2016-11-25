import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import referenctiallyEqualRootRoute from './routes/referentially-equal-root-route'
// import { syncHistoryWithStore } from 'react-router-redux';
import routeSource from './routes';

import store from './store/configure-store';

// const history = syncHistoryWithStore(hashHistory, store);
const routes = Object.assign(referenctiallyEqualRootRoute, routeSource)

export default class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
			  <Router history={hashHistory} routes={routes}/>
			</Provider>
		)
	}
}

