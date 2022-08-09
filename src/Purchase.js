import React, { Component } from 'react';
import { connect } from "react-redux";

import PropTypes from 'prop-types';
import { GameCoverImg, GameBannerImg } from './GameAPI';
import PriceTag from './common/PriceTag';
import Overlay from './common/Overlay'
import './Purchase.css';

class Purchase extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired
  }

  handleSignin = () => {
    const { login } = this.props;
    login();
  }

  render() {
    return (
      <Overlay>
        <div className="purchase" >
          <div className="bg" onClick={this.props.onClose}/>
          <div className="container" >
            <div className="info horizontal-direction" >
              <div className="banner" >
                <GameBannerImg gameData={this.props.item} />
              </div>
              <div className="detail">
                <h1>{this.props.item.title}</h1>
                <p>{this.props.item.categories}</p>
              </div>
              <div className="pc-priceTag horizontal-direction">
                <div className="discountRate">
                  <p>-37%</p>
                </div>
                <div className="price">
                  <p className="sub">$56.77</p>
			            <p>$34.56</p>
                </div>
              </div>
            </div>
            <div className="payment">
              <h2>SELECT PAYMENT TYPE</h2>
              <div className="horizontal-direction">
              <div className="item horizontal-center">
                <img src={'/images/icon_purchase_card.svg'} alt='card' />
                <p className="vertical-center">Credit Card</p>
              </div>
              <div className="item horizontal-center">
                <img src={'/images/icon_purchase_paypal.svg'} alt='paypal' />
                <p className="vertical-center">PayPal</p>
              </div>
              </div>
            </div>
            <div className="divider margin-t-16" />
            <div className="close margin-t-32" onClick={this.props.onClose}>
              Cancel
            </div>
          </div>
        </div>
      </Overlay>
    )
  }
}

export default Purchase;
