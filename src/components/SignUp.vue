<template>
  <form @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="Display Name"
      v-model="displayName"
      autocomplete="username"
    />
    <input
      type="email"
      required
      placeholder="E-mail"
      v-model="email"
      autocomplete="email"
    />
    <input
      type="password"
      required
      placeholder="Password"
      v-model="password"
      autocomplete="current-password"
    />
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";

import useSignUp from "../composables/useSignUp";
export default {
  setup(props,context) {
    const { error, signup } = useSignUp();
    const displayName = ref("");
    const email = ref("");
    const password = ref("");
    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit("signup");
      }
    };
    return {
      displayName,
      email,
      password,
      handleSubmit,
      useSignUp,
      error,
    };
  },
};
</script>

<style></style>
