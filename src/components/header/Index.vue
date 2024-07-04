<template>
  <div class="header">
    <div class="profile_container">
      <img :src="Avatar" alt="" @click="redirect" />
      <div class="inner_container">
        <div class="name">Eduardo Pereira da Costa</div>
        <div class="title">Front-end Developer</div>
      </div>
    </div>
  </div>
</template>
<script>
import "./Index.styl";
import Avatar from "../../assets/images/avatar.png";
import { useRouter } from "vue-router";

export default {
  name: "Header",

  setup() {
    const router = useRouter();

    const redirect = () => {
      router.push("/");
    };
    return { Avatar, redirect };
  },
};
</script>
