import React, { Component } from 'react';
import Moment from 'react-moment';

import ReactPlayer from 'react-player'

import '../App.css';
import './PreviewHover.css';

export default class PreviewHover extends Component {  
  render() {
    return (
        <div className="previewHover">
            <div className="ph-topInfo">
                <h1>{this.props.game.title}</h1>
                <p><Moment format='Do MMM, YYYY'>{this.props.game.released_at}</Moment></p>
            </div>
            <ReactPlayer 
              url={'https://www.youtube.com/watch?v=' + this.props.game.youtube} 
              width='248px'
              height='140px' 
              playing />
            <div className="ph-bottomInfo horizontal-direction">
                <img src={'/images/overall_rating.svg'} />
                <div className="padding-l-8 vertical-center">
                    <h1>4.5</h1>
                </div>
                <div className="padding-l-8 vertical-center">
                    <p>Based on 3,512 Reviews</p>
                </div>
            </div>
            <div className="ph-tag padding-t-16">
                <p>{this.props.game.categories.replace(",", ", ")}</p>
            </div>
        </div>
    )
  }
}
