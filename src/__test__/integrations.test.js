import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';

it('can fetch a list of component and display them', () => {
	//render app
	const wrapper = mount(
		<Root>
			<App />
		</Root>
	);

	//fetch list
	wrapper.find('.fetch-comments').simulate('click');

	//assert lis
	expect(wrapper.find('li').length).toEqual(500);
});
