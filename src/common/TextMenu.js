import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './TextMenu.css';


export default class TextMenu extends Component {
	onItemClick = (itemId) => {
		if(this.props.activeItemId !== itemId) {
			this.props.onItemClick(itemId);
		}
	}

	render() {
		return (
			<ul>
				{this.props.menus.map((item) => (
					<TextMenuItem
						key={item.id}
						id={item.id}
						title={item.title}
						linkTo={item.linkTo}
						onItemClick={this.onItemClick}
						active={item.id === this.props.activeItemId}
					/>
				))}
			</ul>
		)
	}
}


class TextMenuItem extends Component {
	handleClick = () => {
		this.props.onItemClick(this.props.id);
	}

	render() {
		const style = this.props.active ? 'textmenu_item_active' : 'textmenu_item_deactive';
		return (
			<li className={style} onClick={this.handleClick}>
				<Link to={this.props.linkTo} className={style}>{this.props.title}</Link>
			</li>
		);
	}
}


TextMenu.propTypes = {
	// + menus(array)
	//  - id(number)
	//  - title(string)
	menus: PropTypes.array.isRequired,
	onItemClick: PropTypes.func.isRequired,
	activeItemId: PropTypes.number.isRequired,
}
