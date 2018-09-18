import { combineReducers } from 'redux';
import comment_reducer from 'reducer/comment_reducer';
import auth_reducer from 'reducer/auth_reducer';

export default combineReducers({
	comments: comment_reducer,
	auth: auth_reducer
});
