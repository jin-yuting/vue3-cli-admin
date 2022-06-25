
import {createRouter, createWebHistory} from 'vue-router'
import Login from '../Login.vue'
import Text from '../test/index.vue'

const routes = [
  {
    path:'/',
    name:'Login',
    component: Login,
  },
  {
    path:'/test',
    name:'Text',
    component: Text,
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem('token')
  if(to.name !== 'Login' && !token) next({name: 'Login'})
  else next()
})
export default router
