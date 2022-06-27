const todoApp = () => {
	return {
		todoInput: '',
		todos: [],

		addTodo() {
			this.todos.push(this.todoInput);
			this.todoInput = '';
		},

		removeTodo(index) {
			this.todos.splice(index, 1);
		}
	};
};
