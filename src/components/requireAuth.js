import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
	class ComposedComponent extends Component {
		shouldNavigateAway() {
			if (!this.props.auth) {
				this.props.history.push('/');
			}
		}
		componentDidMount() {
			this.shouldNavigateAway();
		}
		componentDidUpdate() {
			this.shouldNavigateAway();
		}
		render() {
			return <ChildComponent {...this.props} />;
		}
	}
	function mapStateToProps(state) {
		return { auth: state.auth };
	}

	return connect(mapStateToProps)(ComposedComponent);
};
