<template>
  <div class="sidebar">
    <img :src="Logo" alt="" />
    <div class="sidebar_container">
      <a @click="setActive($event)">
        <i class="icon">
          <dashboard />
        </i>
        Dashboard
      </a>
      <a @click="setActive($event)">
        <i class="icon">
          <confirm />
        </i>
        Tarefas
      </a>
      <a @click="setActive($event)">
        <i class="icon">
          <cog />
        </i>
        Configurações
      </a>
    </div>
  </div>
</template>
<script>
import Logo from "../../../src/assets/images/logo.png";
import "./Index.styl";
export default {
  name: "Sidebar",
  setup() {
    const setActive = (event) => {
      document
        .querySelectorAll(".sidebar_container a")
        .forEach((link) => link.classList.remove("active"));
        event.currentTarget.classList.add("active");
    };

    return { setActive, Logo };
  },
};
</script>
