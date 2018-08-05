import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentList extends Component {
	renderComments() {
		return this.props.comment.map((comment) => {
			return <li key={comment}>{comment}</li>;
		});
	}
	render() {
		return (
			<div>
				<ul>{this.renderComments()}</ul>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return { comment: state.comments };
}
export default connect(mapStateToProps)(CommentList);
