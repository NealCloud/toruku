import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import {TodoSearch} from 'TodoSearch';

describe('The Component TodoSearch', ()=>{
	it('should exist', ()=>{
		expect(TodoSearch).toExist();
	})
	
	it('should dispatch SET_SEARCH_TEXT on input change', ()=>{
		const searchText = "yoloo";
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText
		}
		
		var spy = expect.createSpy();
		var searchTodo = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
		
		searchTodo.refs.searchText.value = searchText;
		
		TestUtils.Simulate.change(searchTodo.refs.searchText);
		
		expect(spy).toHaveBeenCalledWith(action);
	})
	
	it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', ()=>{
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		}	
		var spy = expect.createSpy();
		var searchTodo = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
		
		searchTodo.refs.showCompleted.checked = true;
		
		TestUtils.Simulate.change(searchTodo.refs.showCompleted);
		
		expect(spy).toHaveBeenCalledWith(action);
	})
	
	
//	it('should not call onAddTodo prop with no data', ()=>{
//		const SPYTEXT = "";
//		
//		var spy = expect.createSpy();
//		var addTodo = TestUtils.renderIntoDocument(<AddTodo addOne={spy}/>);
//		var $el = $(ReactDOM.findDOMNode(addTodo));
//		
//		addTodo.refs.todo.value = SPYTEXT;
//		TestUtils.Simulate.submit($el.find('form')[0]);
//		
//		expect(spy).toNotHaveBeenCalled();
//	})
	
	
})