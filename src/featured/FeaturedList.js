import React, { Component } from 'react';
import FeaturedBigCard from './FeaturedBigCard'
import FeaturedCard from './FeaturedCard'
import GameAPI from '../GameAPI.js'
import './FeaturedList.css';

const FeaturedList = ({games}) => {
	const gameList = GameAPI.all().map((game, i) => {
		return (
			(i === 0 || i === 7 || i === 8) ? 
			<FeaturedBigCard key={game.slug} item={game} /> :
			<FeaturedCard key={game.slug} item={game} />			
		);
	});

	return (
		<div className="featuredList">
			{gameList}
		</div>
	);
}

export default FeaturedList;
