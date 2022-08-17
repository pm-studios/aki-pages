import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

import ServiceMenu from './serviceMenu/ServiceMenu'
import Signup from './signup/Signup'
import Signin from './signup/Signin'
import './Header.css';

import * as authActions from "./store/modules/auth";

export class Header extends Component {
	state = {
		visibleSignupPopup: false,
		visibleSigninPopup: false,
		visibleServiceMenu: false,
		currency: 0, //0:usd, 1:iog
	}

	componentDidMount() {
		this.checkUser();
	}

	componentDidUpdate(prevProps, prevState) {
		const { logged, needed, needLogin } = this.props;
		if(!logged && needed) {
			this.handleOpenSignin();
			needLogin(false);
		}
	}

	handleSignout = () => {
		this.props.logout();
	}
	
	handleOpenSignup = () => {
		this.setState({ visibleSignupPopup: true });
	}

	handleCloseSignup = () => {
		this.setState({ visibleSignupPopup: false });
	}

	handleChangeCurrency = () => {
		this.setState({ currency: this.state.currency === 0 ? 1 : 0 });
	}

	handleOpenServiceMenu = () => {
		this.setState({ visibleServiceMenu: true });
	}

	handleCloseServiceMenu= () => {
		this.setState({ visibleServiceMenu: false });
	}

	handleOpenSignin = () => {
		this.setState({ visibleSigninPopup: true });
	}

	handleCloseSignin = () => {
		this.setState({ visibleSigninPopup: false });
	}

	renderServiceMenu = () => (
		<ServiceMenu onClose={this.handleCloseServiceMenu} />
	)

	renderSignupPopup = () => (
		<Signup onClose={this.handleCloseSignup} onSignin={this.handleOpenSignin} />
	)

	renderSigninPopup = () => (
		<Signin onClose={this.handleCloseSignin} onSignup={this.handleOpenSignup}  />
	)

	checkUser = () => {
		if (localStorage.getItem("userInfo")) {
			const userInfo = JSON.parse(localStorage.getItem("userInfo"));
			this.props.setUserTemp({
				id: userInfo.id,
				username: userInfo.username,
				token: userInfo.token
			});
		}

		this.props.checkUser();
	};

	render() {
		const { logged, username } = this.props;
		return (
			<div className="header">
				<div className="container">
					<div className="logo">
						<Link to={'/'}><img src={'/aki-pages/images/aki_logo.png'} alt='Aki' /></Link>
					</div>
					<div className="search">
						<img src={'/aki-pages/images/search.svg'} />
						<input type="search" name="search" placeholder="Search" />
					</div>
					<div className="menu">
						{!logged && <div className="signup_" onClick={this.handleOpenSignup} ><p>Get Started</p></div>}
						<div className="signin_" onClick={logged ? this.handleSignout : this.handleOpenSignin} >
							<p>{logged ? username+' is Logout..' : 'Sign In'}</p>
						</div>
						<div className="service" onClick={this.handleOpenServiceMenu} >
							<img src={'/aki-pages/images/icon_service_menu.svg'} />
						</div>
						<div className="currency" onClick={this.handleChangeCurrency} >
							{this.state.currency === 0 ? 
							<img src={'/aki-pages/images/icon_usd.png'} /> : 
							<img src={'/aki-pages/images/icon_iog.svg'} />}
						</div>
					</div>
				</div>
				{this.state.visibleServiceMenu && this.renderServiceMenu()}
				{this.state.visibleSignupPopup && this.renderSignupPopup()}
				{this.state.visibleSigninPopup && this.renderSigninPopup()}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	logged: state.auth.logged,
	needed: state.auth.needed,
	username: state.auth.userInfo.username
});
  
const mapDispatchToProps = dispatch => {
	return {
		logout: () => {
			dispatch(authActions.logout());
		},
		checkUser: () => {
			dispatch(authActions.checkUser());
		},
		setUserTemp: ({ id, username }) => {
			dispatch(authActions.setUserTemp({ id, username }));
		},
        needLogin: (needed) => {
            dispatch(authActions.needLogin(needed));
        }
	};
};
  
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);