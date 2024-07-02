<template>
  <header>
    <div class="profile_container">
      <img :src="Avatar" alt="" />
      <div class="inner_container">
        <div class="name">Eduardo Pereira da Costa</div>
        <div class="title">Front-end Developer</div>
      </div>
    </div>
  </header>
</template>
<script>
import "./Index.styl";
import Avatar from '../../assets/images/avatar.png'
export default {
  name: "Header",
  data(){
    return{
        Avatar
    }
  }
};
</script>
