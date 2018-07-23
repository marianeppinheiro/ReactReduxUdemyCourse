import { SAVE_COMMENT } from 'action/types';

export function saveComment(comment) {
	console.log(comment);
	return {
		type: SAVE_COMMENT,
		payload: comment
	};
}
