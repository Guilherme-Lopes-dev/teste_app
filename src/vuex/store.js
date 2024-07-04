import { createStore } from 'vuex';
import todo from './modules/todo/actionCreator'
//Arquivo simples, só com o intuito de criar e exportar a store com o objeto
export default createStore({
    modules: {
    todo
    },
  });