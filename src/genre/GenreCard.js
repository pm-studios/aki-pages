import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Moment from 'react-moment';

import { GameCoverImg, GameBannerImg } from '../GameAPI';
import PriceTag from '../common/PriceTag';
import './GenreCard.css';


export default class GenreCard extends Component {  
  constructor(props) {
		super(props)

		this.state = {
			redirect: false,
		}
  }

  handleClickCard = () => {
		this.setState({ redirect: true });
	}
  
  render() {
    if (this.state.redirect) {
			return <Redirect push to={'/game/' + this.props.item.slug}/>;
    }
    
    return (
      <div className="genreCard" onClick={this.handleClickCard}>
        <div className="genreCard-banner" >
          <GameBannerImg gameData={this.props.item} />
        </div>
        <div className="genreCard-info">
          <h1>{this.props.item.title}</h1>
          <p>{this.props.item.categories}</p>
          <p><span className="genreCard-tag">{String(this.props.item.tags).split(',').map((tag) => tag !== '' ? (
                '#' + tag + ' '
              ) : '' )}
          </span></p>
        </div>
        <PriceTag discountRate="37%" originPrice="$56.77" discountPrice="$34.56" />
      </div>
    )
  }
}
