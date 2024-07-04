//Aqui separo as mutations que é onde altero diretamente o estado da vuex
export default {
  setTodos: (state, todos) => {
    state.data = todos;
  },
  addTodo: (state, todo) => {
    state.data.push(todo);
  },
  deleteTodo: (state, index) => {
    if (index >= 0 && index < state.data.length) {
      state.data.splice(index, 1);
    } else {
      console.error("Índice inválido:", index);
    }
  },
  updateTodo: (state, { index, todo }) => {
    if (index >= 0 && index < state.data.length) {
      state.data[index] = { ...todo }; 
    } else {
      console.error("Índice inválido:", index);
    }
  },
  setSearchQuery: (state, query) => {
    state.searchQuery = query;
  },
  updateTodoCompleted(state, { index, completed }) {
    const todo = state.data[index]; 
    state.data[index] = { ...todo, completed };
  },
};
