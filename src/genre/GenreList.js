import React, { Component } from 'react';
import GenreCard from './GenreCard'
import GameAPI from '../GameAPI.js'
import './GenreList.css';

const GenreList = ({games}) => {
	const gameList = GameAPI.all().map((game, i) => {
		return (
			<GenreCard key={game.slug} item={game} />			
		);
	});

	return (
		<div className="genreList">
			{gameList}
		</div>
	);
}

export default GenreList;
