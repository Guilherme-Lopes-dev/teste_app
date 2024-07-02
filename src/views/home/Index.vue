<template>
  <main class="home">
    <Header />
    <Sidebar />
    <Drawer />
    <Todo style="display: none" />
  </main>
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
