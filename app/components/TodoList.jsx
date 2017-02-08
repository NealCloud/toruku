import React from 'react';
import {connect} from 'react-redux';

import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export class TodoList extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {			
		}
	}
	
	render(){
		
		var {todos, showCompleted, searchText} = this.props;
		
		var renderTodos = () => {
			var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
			 console.log(todos,showCompleted);
			if(filteredTodos.length == 0){
				return (
					<p className='container__message'>Nothing to do</p>
				)
			}
//			else if(!showCompleted){
//				return todos.filter((todof)=>!todof.completed).map((to) => {
//						return (<Todo key={to.id} {...to}/>)
//				})
//			}
			
			return filteredTodos.map((to) => {
				return (<Todo key={to.id} {...to}/>)
			})
		}
		
		return(
			<div>					
					{renderTodos()}									
			</div>
		);
	}		
}

export default connect(
(state)=>{
	return state;
}
)(TodoList);