<template>
  <nav v-if="user">
    <div>
      <p>Selam {{user.displayName}}</p>
      <p class="email">Şuan aktif hesap {{user.email}}</p>
    </div>
    <button class="pointer" @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
export default {
  setup() {
    const { logout, error } = useLogout();
    const {user}=getUser();
    const handleClick = async () => {
      await logout()
    //   if (!error.value) {
    //     console.log("çıkış yapıldı");
    //   }
    };
    return { handleClick ,user};
  },
};
</script>

<style></style>
