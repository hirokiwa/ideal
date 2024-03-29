import { createRouter, createWebHistory } from 'vue-router'
import Entrance from "../views/Entrance.vue"
import Home from '../views/Home.vue'
import Post from "../views/Post.vue"
import Login from "../views/Login.vue"
import Signup from "../views/Signup.vue"
import Mypage from "../views/Mypage.vue"
import Syuppin from "../views/Syuppin.vue"



const routes = [
  {
    path: "/",
    name: "Entrance",
    component: Entrance
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path:'/Mypage',
    name:'Mypage',
    component:Mypage
  },{
    path:'/Syuppin',
    name:'/Syuppin',
    component:Syuppin
  }
  
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
