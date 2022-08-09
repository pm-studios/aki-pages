import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Moment from 'react-moment';

import ReactPlayer from 'react-player'
import ToolTip from 'react-portal-tooltip'

import { GameCoverImg, GameBannerImg } from '../GameAPI';
import PreviewHover from './PreviewHover';
import './FeaturedCard.css';

export default class FeaturedCard extends Component {  
  constructor(props) {
		super(props)

		this.state = {
      redirect: false,
      isTooltipActive: false,
		}
  }

  showTooltip() {
      this.setState({isTooltipActive: true})
  }

  hideTooltip() {
      this.setState({isTooltipActive: false})
  }

  handleClickCard = () => {
		this.setState({ redirect: true });
	}
  
  render() {
    if (this.state.redirect) {
			return <Redirect push to={'/game/' + this.props.item.slug}/>;
    }
    
    return (
      <div className="featuredCard" onClick={this.handleClickCard}>
        <div className="banner" ref={(element) => { this.element = element }} onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}>
          <GameBannerImg gameData={this.props.item} />
        </div>
        <div className="info">
          <p>-37%</p>
          <div className="price">
            <p>
              <span className="sub">$55.99</span>
              $37.79
            </p>
          </div>
        </div>
        <ToolTip active={this.state.isTooltipActive} position="left" arrow="center" parent={this.element}>
          <PreviewHover game={this.props.item}/>
        </ToolTip>
      </div>
    )
  }
}
