export default ({ dispatch }) => (next) => (action) => {
	//check if action has promise on payload prop

	//if yes - wait to resolve

	//if no - send to next middleware

	if (!action.payload || !action.payload.then) {
		return next(action);
	}
	action.payload.then(function(response) {
		const newAction = { ...action, payload: response };
		dispatch(newAction);
	});
};
