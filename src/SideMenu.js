import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import TextMenu from './common/TextMenu'
import './SideMenu.css';
import './App.css';


export const exploreMap = [
	{id: 1, title: "Featured", linkTo: "/"},
	{id: 2, title: "Top Sellers", linkTo: "/topsellers"},
	{id: 3, title: "New Releases", linkTo: "/new"}
]

export const genreMap = [
	{id: 100, title: "Free to Play", linkTo: "/genre/free"},
	{id: 101, title: "Indie", linkTo: "/genre/indie"},
	{id: 102, title: "Action", linkTo: "/genre/action"},
	{id: 103, title: "RPG", linkTo: "/genre/rpg"},
	{id: 104, title: "Sports", linkTo: "/genre/sports" },
	{id: 105, title: "Simulation", linkTo: "/genre/simulation" }
]


export default class SideMenu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activeExploreMenuId: 1,
			activeGenreMenuId: 0,
		}
	}

	onExploreMenuChanged = (menuId) => {
		this.setState({
			activeExploreMenuId: menuId,
			activeGenreMenuId: 0});

		this.props.onChangedMenu(menuId);
	}

	onGenreMenuChanged = (menuId) => {
		this.setState({
			activeExploreMenuId: 0,
			activeGenreMenuId: menuId});

		this.props.onChangedMenu(menuId);
	}

	render() {
		return (
			<div className="sideMenu">
				<div className="container">
					<h1>Explore</h1>
					<TextMenu
						menus={exploreMap}
						onItemClick={this.onExploreMenuChanged}
						activeItemId={this.state.activeExploreMenuId} />
					<h1 className="padding-top-14">BY GENRE</h1>										
					<TextMenu
						menus={genreMap}
						onItemClick={this.onGenreMenuChanged}
						activeItemId={this.state.activeGenreMenuId} />
				</div>
			</div>
		)
	}
}
