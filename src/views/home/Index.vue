<template>
  <div class="container_home">
    <div class="menu">
      <Sidebar  />
    </div>
    <div class="main">
      <Header  />
      <div class="main_content">
        <Drawer />
        <Todo />
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../../components/sidebar/Index.vue";
import Header from "../../components/header/Index.vue";
import Drawer from "../../components/drawer/Index.vue";
import Todo from "../../components/todo/Index.vue";

import "./Index.styl";
export default {
  name: "Home",
  components: {
    Sidebar,
    Header,
    Drawer,
    Todo,
  },
};
</script>
