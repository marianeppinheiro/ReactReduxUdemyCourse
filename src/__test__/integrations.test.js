import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
	moxios.install();
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [ { name: 'comment1' }, { name: 'comment2' } ]
	});
});
afterEach(() => {
	moxios.uninstall();
});

it('can fetch a list of component and display them', (done) => {
	//render app
	const wrapper = mount(
		<Root>
			<App />
		</Root>
	);

	//fetch list
	wrapper.find('.fetch-comments').simulate('click');

	// //assert lis
	// setTimeout(() => {
	// 	wrapper.update(); //update the component with the last state
	// 	expect(wrapper.find('li').length).toEqual(2);
	// 	done(); //function for jest not assuming that the test is finished before it finishes
	// }, 100);

	//assert lis
	moxios.wait(() => {
		wrapper.update(); //update the component with the last state
		expect(wrapper.find('li').length).toEqual(2);
		done(); //function for jest not assuming that the test is finished before it finishes
		wrapper.unmount();
	});
});
