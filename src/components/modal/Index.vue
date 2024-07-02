<template>
  <div v-if="visible" class="modal">
    <div class="modal-overlay" @click="closeModal"></div>
    <div class="modal-content">
      <header class="modal-header">
        <h2>{{ title }}</h2>
        <button @click="closeModal" class="close-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
          >
            <path
              d="M3.93919 5.00016L0.734086 1.79506L0.0731277 1.1341C-0.024375 1.03659 -0.024375 0.878153 0.0731277 0.78065L0.780337 0.0734399C0.87784 -0.0240632 1.03628 -0.0240632 1.13379 0.0734399L4.99984 3.9395L8.8659 0.0731273C8.96341 -0.0243758 9.12185 -0.0243758 9.21935 0.0731273L9.92687 0.780337C10.0244 0.87784 10.0244 1.03628 9.92687 1.13379L6.0605 5.00016L9.92687 8.86621C10.0244 8.96372 10.0244 9.12216 9.92687 9.21966L9.21966 9.92687C9.12216 10.0244 8.96372 10.0244 8.86621 9.92687L4.99984 6.06081L1.79474 9.26591L1.13379 9.92687C1.03628 10.0244 0.87784 10.0244 0.780337 9.92687L0.0731277 9.21966C-0.024375 9.12216 -0.024375 8.96372 0.0731277 8.86621L3.93919 5.00016Z"
              fill="#4E657B"
            />
          </svg>
        </button>
      </header>
      <section class="modal-body">
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<script>
import './Index.styl'
export default {
  name: "MyModal",
  props: {
    title: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:visible"],
  methods: {
    closeModal() {
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>

