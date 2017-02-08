import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {			
		}
		
		this._handleSubmit = this._handleSubmit.bind(this);
	}
	
	_handleSubmit(e){
		
		e.preventDefault();
		var {dispatch} = this.props;
		var todoText = this.refs.todo.value;
		
		if(todoText.length > 0){
			this.refs.todo.value = "";
			//this.props.addOne(todoText)
			dispatch(actions.startAddTodo(todoText));
		}
		else{
			this.refs.todo.focus();
		}		
	}
	
	render(){
		
	return(
		<div className="container__footer">	
			<form onSubmit={this._handleSubmit}>
				<input ref='todo' type='text' placeholder="What to do?" />
				<button type='submit' className="button expanded">Add Todo</button>
			</form>			
		</div>
	);
	}		
}
export default connect()(AddTodo);