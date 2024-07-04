<template>
  <form class="form_todo">
    <input
      type="text"
      v-model="localFormState.name"
      @blur="updateParentObject"
    />
    <label class="description" for="descricao">Descrição</label>
    <textarea
      name="descricao"
      id=""
      cols="30"
      rows="10"
      v-model="localFormState.description"
      @blur="updateParentObject"
    ></textarea>
    <div class="radio-group">
      <input
        type="radio"
        name="priority"
        id="urgent"
        value="urgente"
        v-model="localFormState.priority"
        @blur="updateParentObject"
      />
      <label class="radio_label" for="urgent">Urgente</label>

      <input
        type="radio"
        name="priority"
        id="important"
        value="importante"
        v-model="localFormState.priority"
        @blur="updateParentObject"
      />
      <label class="radio_label" for="important">Importante</label>
    </div>
    <Button
      :class="!validForm ? 'save-button button button-success' : 'save-button button button-disabled'"
      :disabled="validForm"
      @click="handleSubmit()"
    >
      <span> {{text}} </span>
    </Button>
  </form>
</template>

<script>
import { reactive, computed } from "vue";
import "./Form.styl";
export default {
  name: "Todos",
  props: {
    formState: {
      type: Object,
      required: true,
    },
    onSave: {
      type: Function,
      required: true,
    },
    text: {
      type: String
    }
  },
  setup(props, { emit }) {
    const localFormState = reactive({ ...props.formState });
    const updateParentObject = () => {
      emit("update:formState", { ...localFormState });
    };
    const handleSubmit = () => {
        props.onSave(localFormState);
    };

    const validForm = computed(() => {
      return (
        !localFormState.name ||
        !localFormState.description ||
        !localFormState.priority
      );
    });
    return {
      handleSubmit,
      validForm,
      localFormState,
      updateParentObject,
    };
  },
};
</script>
