import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import film from "./routes/films";
import cente from "./routes/center";
import cinemad from "./routes/cinemas";

const routes = [
 
  
    film,
    cente,
    cinemad,

 
  {
    path:"/",
   redirect: "/films/nowplaying"
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
