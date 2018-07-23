import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from 'reducer'; //gets what it is in directory
import ReactDOM from 'react-dom';
import App from 'components/App';

ReactDOM.render(
	<Provider store={createStore(reducer, {})}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
