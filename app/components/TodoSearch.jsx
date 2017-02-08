import React from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class TodoSearch extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {	
			
		}		
		
		this._handleSearch = this._handleSearch.bind(this);
	}
	
	_handleSearch(e){
		var {dispatch} = this.props
		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchText.value;
		
		if(e.target.id == "searchBox" && searchText.length > 1){
			dispatch(actions.setSearchText(searchText))
		}
		else{
			dispatch(actions.toggleShowCompleted())
		}	
		
		//this.props.onSearch(showCompleted, searchText);
	}
	
	render(){
		var {dispatch, showCompleted, searchText} = this.props;
		
		return(
			<div className="container__header">	
				<div>
					<input type='search' ref='searchText' placeholder="Search todos" value={searchText} onChange={()=>{
							var searchText = this.refs.searchText.value;
							dispatch(actions.setSearchText(searchText));
						}}/>
				</div>
				<div>
					<label>
						<input type='checkbox' ref='showCompleted' checked={showCompleted} onChange={()=>{
								dispatch(actions.toggleShowCompleted())
							}}/>
						Show completed Todos
					</label>
				</div>
				
			</div>
		);
	}		
}

export default connect(
	(state) => {
		return{
			showCompleted: state.showCompleted,
			searchText: state.searchText
		}
	}
)(TodoSearch);