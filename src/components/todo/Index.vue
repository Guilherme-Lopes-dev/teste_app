<template>
  <div class="section">
    <div class="inner_container">
      <div class="text_container">
        <h3>Minhas Tarefas</h3>
        <span>
          Olá <b>Eduardo Pereira</b
          >{{ pendingTodosCount >= 1 ? ", você tem" : "." }}
          <b>
            <a href="" v-if="pendingTodosCount >= 1">
              {{ pendingTodosCount }}
              {{ pendingTodosCount > 1 ? "tarefas " : "tarefa " }}
            </a>
          </b>
          <span v-if="pendingTodosCount >= 1">{{
            pendingTodosCount > 1 ? "pendentes." : "pendente."
          }}</span>
        </span>
      </div>
      <div class="input_container">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Buscar tarefas..."
          @input="searchTodos"
        />
        <search class="icon_search" />
      </div>
      <div class="info" v-if="todos.length > 0 && filteredTodos.length == 0">
        Nenhum resultado encontrado
      </div>

      <div v-else>
        <div
          :class="todo.completed ? 'task_container complete' : 'task_container'"
          v-for="(todo, index) in filteredTodos"
          :key="index"
        >
          <label>
            <input
              type="checkbox"
              :checked="todo.completed"
              @change="toggleCompleted(index, $event)"
            />
            <span class="custom-checkbox"></span>
          </label>
          <span :class="todo.completed ? 'name completed' : 'name'">{{
            todo.name
          }}</span>
          <span
            :class="
              todo.priority == 'urgente'
                ? 'priority urgente'
                : 'priority importante'
            "
            >{{ todo.priority }}</span
          >
          <div class="dropdown">
            <button
              class="dropdown-toggle"
              @click="toggleDropdown(index, $event)"
            >
              <vertical class="vertical_dots" />
            </button>
            <div v-if="dropdownIndex === index" class="dropdown-menu">
              <button @click="editTodo(index, todo)">
                <span class="green"></span>Editar
              </button>
              <button @click="openModalDelete(index)">
                <span class="grey"></span> Excluir
              </button>
              <vertical class="vertical_dots" color="#1182F2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Button class="button button-success round add_button" @click="addTodo">
      <plus />
    </Button>
    <Modal
      :title="currentIndex != null ? 'Editar Tarefa' : 'Cadastrar Tarefa'"
      :visible="isModalOpen"
      @update:visible="isModalOpen = $event"
    >
      <Form
        :formState="formState"
        @update:formState="updateFormState"
        :onSave="saveTodo"
        :text="currentIndex != null ? 'Editar' : 'Adicionar'"
      />
    </Modal>
    <Modal
      :visible="isModalDeleteOpen"
      type="delete"
      @update:visible="isModalDeleteOpen = $event"
    >
      <DeleteTodo
        @cancel="isModalDeleteOpen = false"
        :handleDelete="deleteTodo"
        :cancel="cancelDelete"
      />
    </Modal>
  </div>
</template>

<script>
//Criei componentes de remover, adicionar os todos, e nesse arquivo ficou a listagem e a centralização das funções, algumas passadas por parametro pros componentes filho pra lidar com a estrutura que eu criei
//Nos objetos filhos, eles recebem as props e atualizam o objeto pai sendo assim eu consigo renderizar um obj no componente filho, que atualiza no pai e mantenho as funções centralizadas no pai
import { computed, reactive, ref, onMounted, watch, onUnmounted } from "vue";
import { useStore } from "vuex";
import Form from "../form/Form.vue";
import DeleteTodo from "../delete/Index.vue";
export default {
  name: "Todo",
  components: { Form, DeleteTodo },
  setup() {
    const { state, dispatch } = useStore();
    onMounted(() => {
      dispatch("loadTodos");
    });
    const todos = computed(() => state.todo.data);

    const isModalOpen = ref(false);
    const isModalDeleteOpen = ref(false);
    const currentIndex = ref(null);
    const searchQuery = ref("");
    const dropdownIndex = ref(null);
    const todoListContainer = ref(null);

    const initialState = {
      name: "",
      description: "",
      priority: "",
      completed: false,
    };

    const formState = reactive({ ...initialState });

    const filteredTodos = computed(() => {
      const query = searchQuery.value.toLowerCase();
      if (!query) return state.todo.data;
      return state.todo.data.filter(
        (todo) =>
          todo.name.toLowerCase().includes(query) ||
          todo.description.toLowerCase().includes(query)
      );
    });

    const addTodo = () => {
      Object.assign(formState, initialState);
      currentIndex.value = null;
      isModalOpen.value = true;
    };

    const saveTodo = () => {
      if (currentIndex.value !== null) {
        dispatch("updateTodo", {
          index: currentIndex.value,
          todo: { ...formState },
        });
      } else {
        dispatch("saveTodo", { ...formState });
      }
      resetFormState();
      currentIndex.value = null;
      isModalOpen.value = false;
    };

    const editTodo = (index, todo) => {
      currentIndex.value = index;
      formState.name = todo.name;
      formState.description = todo.description;
      formState.priority = todo.priority;
      formState.completed = todo.completed;
      isModalOpen.value = true;
      closeDropdown();
    };

    const openModalDelete = (index) => {
      currentIndex.value = index;
      isModalDeleteOpen.value = true;
      closeDropdown();
    };

    const cancelDelete = () => {
      isModalDeleteOpen.value = false;
    };

    const deleteTodo = () => {
      if (currentIndex.value !== null) {
        dispatch("deleteTodo", currentIndex.value);
        currentIndex.value = null;
        isModalDeleteOpen.value = false;
      }
    };

    const resetFormState = () => {
      Object.assign(formState, initialState);
    };

    const searchTodos = () => {
      dispatch("searchTodos", searchQuery.value);
    };

    const toggleDropdown = (index, event) => {
      dropdownIndex.value = dropdownIndex.value === index ? null : index;
      event.stopPropagation();
    };

    const closeDropdown = () => {
      dropdownIndex.value = null;
    };

    document.addEventListener("click", closeDropdown);

    onUnmounted(() => {
      document.removeEventListener("click", closeDropdown);
    });

    watch(
      () => todoListContainer.value,
      (newVal) => {
        if (newVal) {
          newVal.addEventListener("click", (event) => {
            event.stopPropagation();
          });
        }
      }
    );

    const toggleCompleted = (index, event) => {
      const completed = event.target.checked;
      dispatch("updateTodoCompleted", { index, completed });
    };

    const pendingTodosCount = computed(() => {
      return todos.value.filter((todo) => !todo.completed).length;
    });

    const updateFormState = (updatedFormState) => {
      formState.name = updatedFormState.name;
      formState.description = updatedFormState.description;
      formState.priority = updatedFormState.priority;
    };
    console.log(todos.value.length && filteredTodos.value.length);

    return {
      todos,
      filteredTodos,
      formState,
      addTodo,
      saveTodo,
      editTodo,
      deleteTodo,
      isModalOpen,
      currentIndex,
      searchQuery,
      searchTodos,
      toggleDropdown,
      dropdownIndex,
      todoListContainer,
      toggleCompleted,
      pendingTodosCount,
      updateFormState,
      isModalDeleteOpen,
      openModalDelete,
      cancelDelete,
    };
  },
};
</script>

<style lang="stylus" scoped>
@import './Index.styl';
</style>
