<template>
    <form action="" class="delete_task">
      <div class="trash_icon">
        <trash />
      </div>
      <div class="trash_text">
        <span> Tem certeza que deseja <b>excluir</b> esta tarefa ? </span>
      </div>
      <span class="confirm_text">Essa ação não poderá ser desfeita.</span>
      <div class="trash_buttons">
        <Button class="button button-success" @click="handleCancel"> Cancelar </Button>
        <Button class="button button-danger" @click="deleteTodo"> Confirmar </Button>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    name: "DeleteTodo",
    props: {
      handleDelete: {
        type: Function,
        required: true,
      },
      cancel: {
        type: Function,
        required: true,
      },
    },
    setup(props) {
      const handleCancel = () => {
        props.cancel(); 
      };
  
      const deleteTodo = () => {
        props.handleDelete();
      };
  
      return { handleCancel, deleteTodo };
    },
  };
  </script>
  
  <style lang="stylus" scoped>
    @import './Index.styl';
  </style>
  