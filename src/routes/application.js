import React, { PropTypes } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/header'
import Nav from '../components/nav'
export default class AppRoute extends React.Component {
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