<template>
  <div class="drawer">
    <div class="inner_container">
      <h4>Categorias</h4>
      <div class="list">
        <span class="item_list"
          ><arrow />Todas
          <span class="info" v-if="todos.length > 0">{{
            todos.length
          }}</span>
        </span>
        <span class="item_list">
          <arrow />Urgentes
          <span class="danger" v-if="urgentCount > 0">{{ urgentCount }}</span>
        </span>
        <span class="item_list">
          <arrow />Importantes
          <span class="warning" v-if="importantCount > 0">{{
            importantCount
          }}</span>
        </span>
        <span class="item_list"><arrow />Outras</span>
        <span class="item_list"
          ><arrow />Finalizadas
          <span class="success" v-if="completedCount > 0">{{
            completedCount
          }}</span></span
        >
      </div>
    </div>
  </div>
</template>
<script>
import "./Index.styl";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
export default {
  name: "Drawer",
  setup() {
    const { state, dispatch } = useStore();

    onMounted(() => {
      dispatch("loadTodos");
    });

    const todos = computed(() => state.todo.data);

    const urgentCount = computed(
      () =>
        todos.value.filter(
          (todo) => todo.priority === "urgente" && !todo.completed
        ).length
    );

    const importantCount = computed(
      () =>
        todos.value.filter(
          (todo) => todo.priority === "importante" && !todo.completed
        ).length
    );

    const completedCount = computed(
      () => todos.value.filter((todo) => todo.completed).length
    );

    return { urgentCount, importantCount, todos, completedCount };
  },
};
</script>
