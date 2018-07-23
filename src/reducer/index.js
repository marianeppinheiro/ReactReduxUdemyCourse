import { combineReducers } from 'redux';
import comment_reducer from 'reducer/comment_reducer';

export default combineReducers({
	comments: comment_reducer
});
