import $ from 'jQuery';

module.exports = {
//	setTodos: function(todos){
//		if($.isArray(todos)){
//			localStorage.setItem('todos', JSON.stringify(todos));
//			return todos;
//		}
//		
//	},
//	getTodos: function(){
//		var stringTodos = localStorage.getItem('todos');
//		var todos = [];
//		
//		try{
//			todos = JSON.parse(stringTodos);			
//		}
//		catch(e){		}	
//		
//		return $.isArray(todos) ? todos : [];	
//		
//	},
	
	
	
	filterTodos: function(todos, showCompleted, searchText){
		var filteredTodos = todos;
		
		//filter by showcomplete
		
		filteredTodos = filteredTodos.filter((atodo)=>{
			return !atodo.completed || showCompleted;
		})
		
		//filter by searchText
		if(searchText){
			filteredTodos = filteredTodos.filter((atodo)=>{
				var text = atodo.text.toLowerCase();
				return searchText.length === 0 || text.indexOf(searchText) > -1;
			})
		}
		
		//sort todo no complete first
		filteredTodos.sort((a, b)=>{
			if(a.completed && b.completed){
				return -1;
			}
			else if(a.completed && !b.completed){
				return 1;
			}
			else{
				return 0;
			}
		})
		
		return filteredTodos;
	}
	
}