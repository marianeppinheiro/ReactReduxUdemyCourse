import React from 'react';
import CommentList from 'components/CommentList';
import { mount } from 'enzyme';
import Root from 'Root';

let wrapper;

beforeEach(() => {
	const initialState = {
		comments: [ 'comment 1', 'comment 2' ]
	};
	wrapper = mount(
		<Root initialState={initialState}>
			<CommentList />
		</Root>
	);
});

it('creates one <li></li> per comment', () => {
	expect(wrapper.find('li').length).toEqual(2);
});

it('ahow text for each comment', () => {
	expect(wrapper.render().text()).toContain('comment 1');
	expect(wrapper.render().text()).toContain('comment 2');
});
