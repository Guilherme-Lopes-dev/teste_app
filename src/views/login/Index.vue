<template>
  <main class="main_container">
    <div class="logo_container">
      <div class="inner_container">
        <img :src="Logo" alt="Logo" />
        <h2><b>Facilita</b>tasks</h2>
        <h3>Gestão de tarefas pessoais</h3>
      </div>
    </div>
    <div class="form_container">
      <div class="inner-container">
        <h3>Entre com seus dados de acesso.</h3>
        <form action="">
          <div class="form-group">
            <label for="email">Nome de usuário ou e-mail:</label>
            <input type="text" v-model="formData.email" />
          </div>
          <div class="form-group">
            <label for="password">Senha:</label>
            <input type="password" v-model="formData.password" />
          </div>
          <Button class="button button-success w100" @click="login">
            <span> Entrar </span>
          </Button>
        </form>
        <a> Esqueci minha senha</a>
      </div>
    </div>
  </main>
</template>
<script>
import "./Index.styl";
import Logo from "../../assets/images/logo.png";
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Login",

  setup() {
    const router = useRouter();
    const login = () => {
      router.push("/home");
    };
    const formData = reactive({
      email: "",
      password: "",
    });
    return { Logo, formData, login };
  },
};
</script>
<style scope>
button {
  height: 55px;
}
</style>
