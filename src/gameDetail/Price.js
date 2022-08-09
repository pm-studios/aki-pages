import React, { Component } from 'react';

import Purchase from '../Purchase';

import '../App.css';
import './Price.css'


export class Price extends Component {
  state = {
		visiblePurchasePopup: false,
  }

  constructor(props) {
    super(props)
  }

	handleClosePurchase = () => {
		this.setState({ visiblePurchasePopup: false });
  }
  
  handleOpenPurchase = () => {
    this.setState({ visiblePurchasePopup: true });
  }
  
  renderPurchasePopup = () => (
		<Purchase item={this.props.game} onClose={this.handleClosePurchase} />
	)

  render() {
    return (
      <div className="priceGroup">
        <div className="padding-l-16">
          <h2 className="padding-t-16">Buy Now</h2>
          <div className="pg-priceTag">
            <div className="info">
              <p>-37%</p>
              <div className="price">
                <p className="sub">$99.99</p>
			          <p>$45.67</p>
              </div>
            </div>
          </div>
          <div className="buy" onClick={this.handleOpenPurchase}>
            Buy
          </div>
        </div>
        {this.state.visiblePurchasePopup && this.renderPurchasePopup()}
      </div>
    );
  }
}

export default Price;
