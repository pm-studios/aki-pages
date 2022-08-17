import React, { Component } from 'react';
import { connect } from "react-redux";
import ReactPlayer from 'react-player'
import Rating from 'react-rating';
import Moment from 'react-moment';

import * as gamesActions from "../store/modules/games";
import { GameBannerImg, GameCoverImg } from '../GameAPI';
import GameAPI from '../GameAPI.js'

import SystemRequirement from './SystemRequirement';
import Overall from './Overall';
import Feature from './Feature';
import Share from './Share';
import Price from './Price';
import Review from './Review';
import DLC from './DLC';
import Tag from './Tag';
import Similar from './Similar';
import '../App.css';
import './GameDetail.css'
import PhotoGallery from '../common/PhotoGallery'

export class GameDetail extends Component {
  constructor(props) {
    super(props)
    this.getDetailGame(this.props.match.params.slug);
  }

  getDetailGame = (slug_) => {
    this.game = GameAPI.all().find(({ slug }) => slug === slug_);
    console.log(this.game);
	}
	  
  getThumbnailContent = (game) => {
    return (
      <img src={game.thumbnail} width={120} height={90}/>
    );
  }

  renderLinkText = (path, text) => {
    let link = '/' + path + '/' + text;
    return (
      <span key={text}><a href={link}>{text}</a>, </span>
    );
  }

  renderLinkTexts = (path, texts) => {
    return (
      <span>
        {String(texts).split(',').map((text) => text !== '' ? 
          this.renderLinkText(path, text) : '')}
      </span>
    );
  }

  render() {
    const game = this.game;

    return (
      <div className="gameDetail">
        <div className="banner">
          <GameBannerImg gameData={game} />
        </div>
        <div className="container">        
          <div className="video">
            <ReactPlayer 
              url={'https://www.youtube.com/watch?v=' + game.youtube} 
              width='940px'
              height='526px' />
          </div>

          <div className="infoGroup" >
            <div className="infoLeft" >
              <h1>{game.title}</h1>
              <p className="subtitle">{game.platforms}</p>
              <div className="padding-t-16"/>
              <p>Starring one of the world’s most iconic Super Heroes, Marvel’s Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. Mix and match a varied set of evolved combat mechanics, including melee, aerial combat, webs, stealth, and unique high-tech gadgets that highlight Spider-Man’s boundless acrobatic agility and active combat style. Sony Interactive Entertainment, Insomniac Games, and Marvel have teamed up to create a brand-new and authentic Spider-Man adventure.</p>
              <div className="padding-t-16"/>
              <p><b>Developer:</b> {this.renderLinkTexts("company", game.developers)}</p>
              <p><b>Categories:</b> {this.renderLinkTexts("category", game.categories)}</p>
              <p><b>Time to beat:</b> 63h (Normal mode)</p>
              <p><b>Publisher:</b> {this.renderLinkTexts("company", game.publishers)}</p>
              <p><b>Release Date:</b> <Moment format='Do MMM, YYYY'>{game.released_at}</Moment></p>
              
              <div className="website padding-t-16 horizontal-direction" >
                <a href="" target="_blank" className="vertical-center"> Official Website</a>
                <a href="" target="_blank"><img src={'/aki-pages/images/icon_link.svg'} /></a>
              </div>

              <div className="padding-t-16" >
                <img src={'/aki-pages/images/ESRB_Everyone.svg'} />
                <img src={'/aki-pages/images/PEGI_12.svg'} className="padding-l-16"/>
              </div>

              <Tag game={game} />
              <SystemRequirement />
            </div>
            
            <div className="infoRight">
              <Price game={game} />
              <Overall />
              <Feature />
              <Share />
            </div>
          </div>
          
          <div className="divider margin-t-16" />
          <Review />

          <div className="divider" />
          <DLC />
          
          <div className="divider" />
          <Similar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  game: state.games.game,
  logged: state.auth.logged,
  needed: state.auth.needed,
});

const mapDispatchToProps = dispatch => {
  return {
    getDetailGame: (slug) => {
      dispatch(gamesActions.getDetailGame(slug));
    },
    createRating: ({slug, value}) => {
      dispatch(gamesActions.createRating({slug, value}));
    },
    updateRating: ({slug, id, value}) => {
        dispatch(gamesActions.updateRating({slug, id, value}));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameDetail);