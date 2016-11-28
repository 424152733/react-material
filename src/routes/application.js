import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/header'
import Nav from '../components/nav'
export default class AppRoute extends React.Component {
	static propTypes = {

	}

	static contextTypes = {
		
	}

	state = {

	}

	static childContextTypes = {

	}

	getChildContext() {

	}

	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header/>
					<Nav/>
					{this.props.children}
				</div>
			</MuiThemeProvider>
		)
	}
}