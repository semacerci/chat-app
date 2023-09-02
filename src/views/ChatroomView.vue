<template>
 <div class="container">
  <nav-bar></nav-bar>
  <new-chat-form></new-chat-form>
 </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import getUSer from '@/composables/getUser'
import {watch} from 'vue'
import { useRouter } from 'vue-router'
import NewChatForm from '@/components/NewChatForm.vue'

export default {
  components: { NavBar,NewChatForm },

  setup(){
    const {user} = getUSer();
    const router =useRouter();
    //kullanıcı izle logout olduysa ana sayfaya yönlendir
    watch(user,()=>{
      if (!user.value){
        router.push({name:'welcomeview'})
      }
    })

  }

}
</script>

<style>

</style>