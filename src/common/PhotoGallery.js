import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';
import './PhotoGallery.css';


class PhotoGallery extends Component {
	constructor () {
		super();

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}

	openLightbox (index, event) {
		event.preventDefault();

		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}

	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}

	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}

	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}

	handleClickImage () {
		if (this.state.currentImage === this.props.images.length - 1) 
			return;

		this.gotoNext();
	}

	renderGallery () {
		if (!this.props.images) 
			return;

		return (
			<div className="photoGallery">
				{this.props.images.map((obj, i) => (
					<a 
						href={obj.src}
						className="thumbnail"
						key={i}
						onClick={(e) => this.openLightbox(i, e)}>
						<img src={obj.src} />
					</a>
				))}
			</div>
		);
	}

	render () {
		return (
			<div className="section">
				{this.renderGallery()}
				<Lightbox
					currentImage={this.state.currentImage}
					images={this.props.images}
					isOpen={this.state.lightboxIsOpen}
					onClickImage={this.handleClickImage}
					onClickNext={this.gotoNext}
					onClickPrev={this.gotoPrevious}
					onClickThumbnail={this.gotoImage}
					onClose={this.closeLightbox}
					preventScroll={this.props.preventScroll}
					showThumbnails={this.props.showThumbnails}
					spinner={this.props.spinner}
					spinnerColor={this.props.spinnerColor}
					spinnerSize={this.props.spinnerSize}
					theme={this.props.theme}
				/>
			</div>
		);
	}
}


PhotoGallery.propTypes = {
	heading: PropTypes.string,
	images: PropTypes.array,
	showThumbnails: PropTypes.bool,
	subheading: PropTypes.string,
};


export default PhotoGallery;