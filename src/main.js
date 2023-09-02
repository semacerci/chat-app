import { createApp } from 'vue'
import '@/firebase/config.js';
import App from './App.vue'
import router from './router'
import "./assets/main.scss"
import {projectAuth} from './firebase/config'


//login olan kullanıcının chat sayfası yenilendiğinde çalışması için;s
let app;

projectAuth.onAuthStateChanged(()=>{
    if(!app){
        app=createApp(App).use(router).mount('#app');
    }
})


