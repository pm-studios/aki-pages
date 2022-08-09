import React, { Component } from 'react';

import '../App.css';
import './Tag.css'


export class Tag extends Component {
  constructor(props) {
    super(props)
  }

  renderTag = (tag) => {
    let link = "/keyword/" + tag;
    return (
      <span key={tag}><a href={link}>{tag}</a>, </span>
    );
  }

  renderTags = () => {
    return (
      <div className="tag-container">
        <div className="divider margin-b-16 "/>
        <h2>Keywords</h2>
        <div className="tags">
          {String(this.props.game.tags).split(',').map((tag) => tag !== '' ? 
            this.renderTag(tag) : '')}
        </div>
        <div className="divider margin-t-16" />
      </div>
    );
  }

  render() {
    let tags;
    if (String(this.props.game.tags).length > 0) {
      tags = this.renderTags();
    }

    return (
      <div className="tag">
        {tags}
      </div>
    );
  }
}

export default Tag;
