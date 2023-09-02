<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <login-form @login="enterChat"></login-form>
      <p>No account yet? <span  @click="showLogin=false">Signup</span></p> 
    </div>

    <div v-else>
      <h2>Sign Up</h2>
      <sign-up-vue @signup="enterChat"></sign-up-vue>
      <p>ALready registered? <span  @click="showLogin=true">Login</span></p>
    </div>
  </div>
</template>

<script>

import SignUpVue from "../components/SignUp.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import {useRouter} from "vue-router"
export default {
  components: {
    SignUpVue,
    LoginForm,
  },
  setup() {
    const showLogin = ref(true);
    const router =useRouter()

    const enterChat = () => {
      router.push({name:'chatroom'})
    }
    return {
      showLogin, enterChat
    };
  },
};
</script>

<style lang="scss"></style>
