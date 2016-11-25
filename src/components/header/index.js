import React, { PropTypes } from 'react';
import styles from './header.scss';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton'

export default class Header extends React.Component {

	handleTouchTap() {
		alert('onTouchTap triggered on the title component');
	}

	render() {
		return(
			<AppBar 
				title={<span>React Native</span>}
				onTitleTouchTap={this.handleTouchTap.bind(this)}
    			iconElementRight={<FontIcon className={styles.icon}/>}
			/>
		)
	}
}