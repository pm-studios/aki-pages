import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Moment from 'react-moment';

import { GameCoverImg, GameBannerImg } from '../GameAPI';
import PriceTag from '../common/PriceTag';
import './FeaturedBigCard.css';

import ReactPlayer from 'react-player'
import ToolTip from 'react-portal-tooltip'

export default class FeaturedBigCard extends Component {  
  constructor(props) {
		super(props)

		this.state = {
      redirect: false,
      isTooltipActive: false,
		}
  }

  handleClickCard = () => {
		this.setState({ redirect: true });
	}
  
  showTooltip() {
    this.setState({isTooltipActive: true})
  }

  hideTooltip() {
    this.setState({isTooltipActive: false})
  }

  render() {
    if (this.state.redirect) {
			return <Redirect push to={'/game/' + this.props.item.slug}/>;
    }
    
    return (
      <div className="featuredBigCard" onClick={this.handleClickCard}>
        <div className="banner" ref={(element) => { this.element = element }} onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>
          <GameBannerImg gameData={this.props.item} />
        </div>
        <PriceTag discountRate="-37%" originPrice="$56.77" discountPrice="$34.56" />
        <ToolTip active={this.state.isTooltipActive} position="left" arrow="center" parent={this.element}>
          <div>
            <p>{this.props.item.title}</p>
            <ReactPlayer 
              url={'https://www.youtube.com/watch?v=' + this.props.item.youtube} 
              width='320px'
              height='200px' 
              playing />
          </div>
        </ToolTip>
      </div>
    )
  }
}
