import mutations from "./mutations";
//Aqui inicializo zerado o state da aplicação 
//Abaixo estao minhas actions pra filtrar salvar deletar editar e carregar eles para serem usados na tela
const state = () => ({
  data: [],
});
const actions = {
  loadTodos({ commit }) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    commit("setTodos", todos);
  },
  saveTodo({ commit, state }, todo) {
    commit("addTodo", todo);
    localStorage.setItem("todos", JSON.stringify(state.data));
  },
  async deleteTodo({ commit, state }, index) {
    commit("deleteTodo", index);
    localStorage.setItem("todos", JSON.stringify(state.data));
  },
  async updateTodo({ commit, state }, { index, todo }) {
    commit("updateTodo", { index, todo });
    localStorage.setItem("todos", JSON.stringify(state.data));
  },
  async updateTodoCompleted({ commit, state }, { index, completed }) {
    commit("updateTodoCompleted", { index, completed });
    localStorage.setItem("todos", JSON.stringify(state.data)); 
  },
  searchTodos({ commit }, query) {
    commit("setSearchQuery", query);
  },
};
export default {
  state,
  actions,
  mutations,
};
