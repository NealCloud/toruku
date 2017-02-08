import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import * as actions from 'actions';
import {AddTodo} from 'AddTodo';

describe('The Component AddTodo', ()=>{
	it('should exist', ()=>{
		expect(AddTodo).toExist();
	})
	
	it('should dispatch Add_TODO with valid text', ()=>{
		const SPYTEXT = "check mail";
		
		var action = actions.startAddTodo(SPYTEXT);
		
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));
		
		addTodo.refs.todo.value = SPYTEXT;
		TestUtils.Simulate.submit($el.find('form')[0]);
		
		expect(spy).toHaveBeenCalledWith(action);
	})
	
	it('should not disptach onAddTodo prop with no data', ()=>{
		const SPYTEXT = "";
		
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));
		
		addTodo.refs.todo.value = SPYTEXT;
		TestUtils.Simulate.submit($el.find('form')[0]);
		
		expect(spy).toNotHaveBeenCalled();
	})
	
	
})