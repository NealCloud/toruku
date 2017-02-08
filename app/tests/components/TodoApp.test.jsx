import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import * as configureStore from 'configureStore';
import TodoApp from 'TodoApp';
import TodoList from 'TodoList';

describe('The Component TodoApp', ()=>{
	it('should exist', ()=>{
		expect(TodoApp).toExist();
	})

	it('should render todoList', ()=>{
		var store = configureStore.configure();
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<TodoApp/>
			</Provider>
		);
		
		var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
		var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
		
		expect(todoList.length).toEqual(1);
	});
})