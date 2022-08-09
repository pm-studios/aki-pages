import React, { Component } from 'react';
import './PriceTag.css';


export default class PriceTag extends Component {    
  render() {
    return (
      <div className="priceTag">
        <div className="info">
          <p>{this.props.discountRate}</p>
          <div className="price">
            <p className="sub">{this.props.originPrice}</p>
			      <p>{this.props.discountPrice}</p>
          </div>
        </div>
      </div>
    )
  }
}
