import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import TodoApp from 'TodoApp';

var actions = require('actions');
var store = require('configureStore').configure();
import TodoAPI from 'TodoAPI';

store.subscribe(()=>{
	var state = store.getState();
	
	console.log('New state', store.getState());
	
	//TodoAPI.setTodos(state.todos);
})

//store.dispatch(actions.addTodo('Clean the yard'));
//store.dispatch(actions.setSearchText('yard'));
//store.dispatch(actions.toggleShowCompleted());

//var initialTodos = TodoAPI.getTodos();
//store.dispatch(actions.addTodos(initialTodos));

store.dispatch(actions.startAddTodos());

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
	
	<Provider store={store}>
		<TodoApp/>
	</Provider>,
	
	document.getElementById('app')
);


//		<IndexRoute component={indexComp}/>
//			<Route path="/countdown" component={anotherpageComp}/>

//<Router history={hashHistory}>
//		<Route path="/" component={TodoApp}>		
//		</Route>
//	</Router>,