import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import TextMenu from './common/TextMenu'
import './TopMenu.css';
import './App.css';


const menus = [
	{
		id: 1,
		title: "none"
	},
]


export default class Menu extends Component {
	static propTypes = {
		activeMenuId: PropTypes.number,
	}
	
	constructor(props) {
		super(props)

		this.state = {
			redirect: false,
		}
	}

	handleMenuChanged = (menuId) => {
		console.log(menuId);
		if(this.props.activeMenuId !== menuId) {
			this.activeMenuId = menuId;
			this.setState({redirect: true});
		}
	}

	render() {
		if (this.state.redirect) {
			switch(this.activeMenuId) {
				default: return <Redirect push to='/'/>;
			}
		}

		return (
			<div className="topMenu">
				<div className="container">
				</div>				
			</div>
		)
	}
}
