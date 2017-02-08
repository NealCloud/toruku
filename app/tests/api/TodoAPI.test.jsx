import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('The Component TodoAPI', ()=>{
	beforeEach(() =>{
		localStorage.removeItem('todos');
	})
	
	
	it('should exist', ()=>{
		expect(TodoAPI).toExist();
	})
	
//	describe('set Todos', ()=>{
//		it('should set valid todo array', ()=>{
//			
//			var todos = [{
//				id: 23,
//				text: 'test add',
//				completed: false
//			}];
//			
//			TodoAPI.setTodos(todos);			
//			var actualTodos = JSON.parse(localStorage.getItem('todos'));			
//			expect(actualTodos).toEqual(todos);			
//			
//	})
//		
//			it('should not set invalid todo array', ()=>{
//			
//			var badtodo = { id: 23,	};	
//				
//			TodoAPI.setTodos(badtodo);			
//			expect(localStorage.getItem('todos')).toBe(null);			
//	})
//		
//		
//	});
//	
//	
//	describe('get Todos', ()=>{
//		it('should get empty array', ()=>{
//			
//			var actualTodos = TodoAPI.getTodos();			
//						
//			expect(actualTodos).toEqual([]);			
//			
//		})
//		
//		it('should get empty array', ()=>{
//			
//			var todos = [{
//				id: 23,
//				text: 'test add',
//				completed: false
//			}];	
//				
//			localStorage.setItem('todos', JSON.stringify(todos));
//			var actualTodos = TodoAPI.getTodos();			
//						
//			expect(actualTodos).toEqual(todos);			
//			
//		})
//				
//	});
	
	describe('filterTodos', () =>{
		var todos = [
			{
				id: 1,
				text: 'some text',
				completed: true
			},
			{
				id: 2,
				text: 'ugly text',
				completed: true
			},
			{
				id: 3,
				text: 'some other text',
				completed: false
			}
		]
		
		it('should return all items', ()=>{
			
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');									
			expect(filteredTodos.length).toBe(3);			
			
		})
		
		it('should return only unCompleted items', ()=>{
			
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');									
			expect(filteredTodos.length).toBe(1);			
			
		})
		
		it('should sort by completed status', ()=>{
			
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			
			expect(filteredTodos[0].completed).toBe(false);
			expect(filteredTodos.length).toBe(3);			
			
		})
		
		it('should filter todos by searchText', ()=>{
			
			var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
			
			expect(filteredTodos.length).toBe(2);			
			
		})
		
		it('should filter todos by no searchText', ()=>{
			
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			
			expect(filteredTodos.length).toBe(3);			
			
		})
		
		
	})
	
})