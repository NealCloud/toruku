import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {Provider} from 'react-redux';
import $ from 'jQuery';

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
//import TodoList from 'TodoList';
//import Todo from 'Todo';

describe('The Component TodoList', ()=>{
	
	it('should exist', ()=>{
		
		expect(TodoList).toExist();
		
	});
		
	it('should render one Todo component for each todo item', () => {
		
		var todos = [
				{
					id: 1,
					text: "Walk the dog",
					completed: false,
					completedAt: undefined,
					createdAt: 500
				},
				{
					id:2,
					text: 'Clean the yard',
						completed: false,
					completedAt: undefined,
					createdAt: 500
				}
			];
		
		var store = configure({
			todos
		});
		
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList></ConnectedTodoList>
			</Provider>
		)
		
		
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
		
		expect(todosComponents.length).toBe(todos.length);
	})
	
		it('should render message when no todo', () => {
		
		var todos = [	];
		
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
			
		var $el = $(ReactDOM.findDOMNode(todoList));
		
		
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
		
		expect($el.find('.container__message').length).toBe(1);
	})
	
	
})