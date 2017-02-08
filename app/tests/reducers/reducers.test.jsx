import expect from 'expect';
import df from 'deep-freeze-strict';

import * as reducers from 'reducers';

describe('REducers', ()=>{
	describe('searchTextReducer',()=>{
		it('should set searchTExt',()=>{
			//create own action to limit testing threshold
			var action = {
				type: 'SET_SEARCH_TEXT',
				searchText: 'dog'
			};
			
			var res = reducers.searchTextReducer(df(''), df(action));
			
			expect(res).toEqual(action.searchText);
		})
	})
	
	describe('showCompleted Reducer',()=>{
		it('should toggle showCompleted',()=>{
			//create own action to limit testing threshold
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED',				
			};
			
			var res = reducers.showCompletedReducer(df(false), df(action));
			
			expect(res).toEqual(true);
		})
	})
	
	describe('todosReducer',() =>{
		it('should add new Todo',() =>{
			//create own action to limit testing threshold
			var action = {
				type: 'ADD_TODO',
				todo: {
					id: "123",
					text: 'blako',
					completed: false,
					completedAt: null,
					createdAt: 3030
				}
			};
			
			var res = reducers.todosReducer(df([]), df(action));
			
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(action.todo);
		})
		
		it('should add existing todos',() =>{
			//create own action to limit testing threshold
			var todos = [{
				id: "123",
				text: 'blako',
				completed: false,
				completedAt: null,
				createdAt: 3030
			}];
			
			var action = {
				type: 'ADD_TODOS',
				todos
			};
			
			var res = reducers.todosReducer(df([]), df(action));
			console.log(res);
			expect(res.length).toEqual(1);
			expect(res[0]).toEqual(todos[0]);
		})
		
		
		it('should update todo on a completed on a Todo',() =>{
			//create own action to limit testing threshold
			var todos = [{
				id: "123",
				text: 'blako',
				completed: true,
				completedAt: 125
			}];
			
			var updates = {
				completed: false,
				completedAt: null
			}
			
			var action = {
				type: 'UPDATE_TODO',
				id: todos[0].id,
				updates
			};
			
			var res = reducers.todosReducer(df(todos), df(action));
			
			expect(res[0].completed).toEqual(updates.completed);
			expect(res[0].completedAt).toEqual(updates.completedAt);
			expect(res[0].text).toEqual(todos[0].text);
		})
	})
	
})