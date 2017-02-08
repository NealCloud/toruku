import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('The Component Todo', ()=>{
	it('should exist', ()=>{
		expect(Todo).toExist();
	})
	
	it('should dispatch TOGGGLE_TODO with id 119', ()=>{
		var todoData = {
			id: 119,
			text: 'Write todo.text.jsx test',
			completed: true
		};
		var action = actions.startToggleTodo(todoData.id, !todoData.completed)
		
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
		
		var $el = $(ReactDOM.findDOMNode(todo));
		
		TestUtils.Simulate.change($el[0]);
		
		expect(spy).toHaveBeenCalledWith(action);
		
		
	});
	
	
})