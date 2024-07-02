<template>
<button :class="buttonClass" @click="handleClick">
    <slot>

    </slot>
</button>
</template>
<script>
import './Index.styl'

export default {
  name: "Button",
  props: {
    action: {
      type: Function,
      default: () => {} 
    },
    buttonClass:{
        type:String,
    }, 
  },
  methods: {
    handleClick(event) {
      if (this.action) {
        this.action(event); 
      }
    }
  }
};
</script>