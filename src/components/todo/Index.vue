<template>
  <div class="section">
    <div class="inner_container">
      <h3>Minhas Tarefas</h3>
      <p>Olá Eduardo Pereira, você tem <a>4 tarefas pendentes.</a></p>
      <input type="text" />
      <div>
        <div class='task_container' v-for="(tarefa, index) in tarefas" :key="index">
          <span>{{ tarefa.completed }}</span>
          <span class="name">{{ tarefa.name }}</span>
          <span class="category">{{ tarefa.category }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import './Index.styl'
export default {
  name: "Todos",
  setup() {
    const tarefas = [
      {
        completed: false,
        name: "Comprar mantimentos",
        description: "Ir ao mercado e comprar frutas, legumes e pão.",
        category: "urgente",
      },
      {
        completed: true,
        name: "Fazer exercícios",
        description: "Treino de musculação na academia.",
        category: "importante",
      },
      {
        completed: false,
        name: "Estudar programação",
        description:
          "Estudar novos conceitos de JavaScript e praticar exercícios.",
        category: "importante",
      },
      {
        completed: false,
        name: "Ler um livro",
        description: 'Ler pelo menos um capítulo do livro "A Arte da Guerra".',
        category: "",
      },
      {
        completed: true,
        name: "Organizar a mesa",
        description:
          "Arrumar a mesa do escritório e descartar itens desnecessários.",
        category: "urgente",
      },
    ];
    return { tarefas };
  },
};
</script>
