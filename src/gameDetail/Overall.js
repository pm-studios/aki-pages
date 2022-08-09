import React, { Component } from 'react';

import '../App.css';
import './Overall.css'


export class Overall extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="overall2">
        <h2>Overall Reviews</h2>
        <div className="overall-container">
          <img src={'/images/overall_rating.svg'} />
          <div className="padding-l-16 vertical-center">
            <h1>4.5</h1>
          </div>
          <div className="padding-l-16 vertical-center">
            <p>Based on 3,512 Reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Overall;
