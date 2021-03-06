import firebase, {firebaseRef} from 'app/firebase/index.js';
import moment from 'moment';

export var setSearchText = (searchText) =>{
	return {
		type: 'SET_SEARCH_TEXT',
		searchText
	};
};

export var toggleShowCompleted = () =>{
	return{
		type: 'TOGGLE_SHOW_COMPLETED',
				
	}	;
};

export var addTodo = (todo) =>{	
	return {
		type: 'ADD_TODO',
		todo
	};
};

export var startAddTodo = (text) => {
	return (dispatch, getState) => {
		
		var todo = 	{					
					text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: null
				};
		
		var todoRef = firebaseRef.child('todos').push(todo);
		
		return todoRef.then(()=>{
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}))
		})
		
	};
}

export var addTodos = (todos) =>{	
	return {
		type: 'ADD_TODOS',
		todos
	};
};

export var startAddTodos = () => {
	return (dispatch, getState)=>{
		
		var todoRef = firebaseRef.child(`todos`);
		
		return todoRef.once('value').then((snap)=>{			
			var rawData = snap.val() || {};
			
			var todoKeys = Object.keys(rawData);
			var todoList = todoKeys.map((key)=>{
				return {...rawData[key], id:key};
			});			
			console.log(todoList);
			
			dispatch(addTodos(todoList));
		});
	}
}

export var updateTodo = (id, updates) =>{
	return {
		type: 'UPDATE_TODO',
		id,
		updates
	};
};

export var startToggleTodo = (id, completed) => {
	return (dispatch, getState) => {
		var todoRef = firebaseRef.child(`todos/${id}`);
		
		var updates = {
			completed,
			completedAt: completed ? moment().unix() : null
		};
		
		return todoRef.update(updates).then(()=>{
			dispatch(updateTodo(id,updates));
		});	
		
	};
}
