import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase';

import * as actions from 'actions';

var createMockStore =  configureMockStore([thunk]);

describe('Actions', ()=>{
	it('should generate search text action', ()=>{
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some search text'
		}
		
		var res = actions.setSearchText(action.searchText);
		
		expect(res).toEqual(action);
		
	})
	
			it('should generate search toggleshow completed action', ()=>{
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED',			
		}
		
		var res = actions.toggleShowCompleted();
		
		expect(res).toEqual(action);
		
	})
			

		it('should create Todo and dipatch ADD_TODO', (done)=>{
			const store = createMockStore({});
			const todoText = 'My todo test item';
			
			store.dispatch(actions.startAddTodo(todoText)).then(()=>{
				
				const actions = store.getActions();
				
				expect(actions[0]).toInclude({
					type: 'ADD_TODO'					
				});
				
				expect(actions[0].todo).toInclude({
					text: todoText					
				});
				
				done();
				
			}).catch(done);

		})
	
		it('should generate search todo action', ()=>{
		var action = {
			type: 'ADD_TODO',
			todo: {
				id: "123",
				text: 'blako',
				completed: false,
				completedAt: null,
				createdAt: 3030
			}
		}
		
		var res = actions.addTodo(action.todo);
		
		expect(res).toEqual(action);
		
	})
		
		
		it('should generate add todos action ', ()=>{
		var todos = [{
			text: 'walk bog',
			id: '123',
			completed: false,
			completedAt: null,
			createdAt: 43330
		}];
			
		var action = {
			type: 'ADD_TODOS',
			todos
		};
		
		var res = actions.addTodos(todos);
		
		expect(res).toEqual(action);
		
	})
		
		it('should generate update todo action', ()=>{
		var action = {
			type: 'UPDATE_TODO',
			id: '123',
			updates: {completed: false}
		}
		
		var res = actions.updateTodo(action.id, action.updates);
		
		expect(res).toEqual(action);
		
	})
		
		
	describe('Tests with firebase todos', () => {
		var testTodoRef;
		
		beforeEach((done) => {
			var todosRef = firebaseRef.child('todos');
			
			todosRef.remove().then(()=>{
				testTodoRef = firebaseRef.child('todos').push();
				
				return testTodoRef.set({
					text: 'Something to do',
					completed: false,
					createdAt: 235353
				})				
			})
			.then(()=> done())
			.catch(done);
			
			testTodoRef = firebaseRef.child('todos').push();
			
			
		});
		
		
		afterEach((done) => {
			testTodoRef.remove().then(()=> done());			
		});
		
		
		it('should toggle todo and dispatch UPDATE_TODO action', (done) =>{
			const store = createMockStore({});
			const action = actions.startToggleTodo(testTodoRef.key, true);
			
			store.dispatch(action).then(() => {
				const mockActions = store.getActions();
				
				expect(mockActions[0]).toInclude({
					type: 'UPDATE_TODO',
					id: testTodoRef.key					
				});
				
				expect(mockActions[0].updates).toInclude({
					completed: true					
				});
				
				expect(mockActions[0].updates.completedAt).toExist();
				
				done();				
			}, done)
		})
		
		it('should populate todos and sipatch ADD_TODOS', (done) =>{			
			
			const store = createMockStore({});
			const action = actions.startAddTodos();
			
			store.dispatch(action).then(() => {
				const mockActions = store.getActions();
				
				expect(mockActions[0].type).toEqual('ADD_TODOS');
				expect(mockActions[0].todos.length).toEqual(1);
				expect(mockActions[0].todos[0].text).toEqual("Something to do");
				
				
				
				done();				
			}, done)
		})
		
		
		
	})	
		
})