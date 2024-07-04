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
        <form @submit.prevent="login" class="form_login">
          <div class="form-group">
            <label for="email">Nome de usuário ou e-mail:</label>
            <input type="text" class="login_input" v-model="formData.email" />
          </div>
          <div class="form-group">
            <label for="password">Senha:</label>
            <input
              type="password"
              class="login_input"
              v-model="formData.password"
            />
          </div>
          <Button class="button button-success" type="submit">
            <span> Entrar </span>
          </Button>
        </form>
        <Modal :visible="isModalOpen" @update:visible="isModalOpen = $event">
          <h3>Por favor, insira e-mail e senha.</h3>
        </Modal>
        <a> Esqueci minha senha</a>
      </div>
    </div>
  </main>
</template>

<script>
import "./Index.styl";
import Logo from "../../assets/images/logo.png";
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Login",
  setup() {
    const router = useRouter();
    const isModalOpen = ref(false)
    const login = () => {
      if (formData.email !== "" && formData.password !== "") {
        router.push("/home");
      } else {
        isModalOpen.value = true
      }
    };

    const formData = reactive({
      email: "",
      password: "",
    });
    return { Logo, formData, login,  isModalOpen };
  },
};
</script>
