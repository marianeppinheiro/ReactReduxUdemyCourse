import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducer from 'reducer';

export default ({ children, initialState = {} }) => {
	const store = createStore(reducer, initialState, applyMiddleware(reduxPromise));
	return <Provider store={store}>{children}</Provider>;
};
