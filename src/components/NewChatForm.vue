<template>
  <form action="">
    <textarea placeholder="Mesaj yaz"
    v-model="message"
    @keypress.enter.prevent="handleSubmit"></textarea>
  </form>
</template>

<script>
import {ref} from 'vue';
import getUSer from '@/composables/getUser';
import {timestamp} from '../firebase/config'
export default {
    setup(){
        const {user} =getUSer()
        const message =ref('')

        const handleSubmit =async()=> {
            const chat ={
                name:user.value.displayName,
                message: message.value,
                createdAt:timestamp(),
            };
            console.log(chat);
            message.value="";
        }
        return {
            message,handleSubmit
        }
    }
};


</script>

<style></style>
