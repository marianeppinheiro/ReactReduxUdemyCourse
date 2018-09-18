import React, { Component } from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'action';

class App extends Component {
	renderButton() {
		if (this.props.auth) {
			return <button onClick={() => this.props.changeAuth(false)}>Sign out</button>;
		} else {
			return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>;
		}
	}

	renderHeader() {
		return (
			<div>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/post">Post</Link>
					</li>
					<li>{this.renderButton()}</li>
				</ul>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.renderHeader()}
				<Route path="/post" component={CommentBox} />
				<Route path="/" exact component={CommentList} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}
export default connect(mapStateToProps, actions)(App);
