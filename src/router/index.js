import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import {projectAuth} from '../firebase/config'

// login olmadan chat sayfasına girişi engelleme işlemi yapıyoru
const requireAuth = (to,from,next)=>{
  let user =projectAuth.currentUser
  
  if(!user){
    next({name:'welcome'});
  }else{
    next();
  }

}

const routes = [
  {
    path: '/',
    name: 'welcomeview',
    component: WelcomeView
  },
  {
    path: '/chatroomview',
    name: 'chatroom',
    
    component: () => import('../views/ChatroomView.vue'),
    beforeEnter:requireAuth

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
