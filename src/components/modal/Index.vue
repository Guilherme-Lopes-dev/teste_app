<template>
  <div v-if="visible" class="modal">
    <div class="modal-overlay" @click="closeModal"></div>
    <div :class="type == 'delete' ? 'modal-content delete' : 'modal-content' ">
      <header class="modal-header">
        <h2>{{ title }}</h2>
      </header>
      <button @click="closeModal" class="close-button">
        <close />
      </button>
      <section class="modal-body">
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyModal",
  props: {
    title: {
      type: String,
    },
    visible: {
      type: Boolean,
      required: true,
    },
    type:{
      type:String,
      required:false
    }
  },

  setup(props, { emit }) {
    const closeModal = () => {
      emit("update:visible", false); 

    };
    return { closeModal };
  },
};
</script>

<style lang="stylus" scoped>
@import './Index.styl';
</style>
