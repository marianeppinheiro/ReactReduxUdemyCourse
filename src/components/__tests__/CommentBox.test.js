import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';
import Root from 'Root';

let wrapper;

beforeEach(() => {
	wrapper = mount(
		<Root>
			<CommentBox />
		</Root>
	);
});

afterEach(() => {
	wrapper.unmount();
});

it('has a text area and a button', () => {
	expect(wrapper.find('textarea').length).toEqual(1);
	expect(wrapper.find('button').length).toEqual(1);
});

describe('the text area', () => {
	beforeEach(() => {
		wrapper.find('textarea').simulate('change', { target: { value: 'new comment' } }); //change is the name of the event and not onchange
		wrapper.update();
	});

	it('receives new value on change', () => {
		expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
	});

	it('cleans the text area after submitting', () => {
		wrapper.find('form').simulate('submit');
		wrapper.update();
		expect(wrapper.find('textarea').prop('value')).toEqual('');
	});
});
