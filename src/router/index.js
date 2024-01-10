import { createRouter, createWebHistory } from '@ionic/vue-router'

import HomeView from '../views/HomeView.vue'
import UpdateUserView from '../views/UpdateUserView.vue'
import RegisterList from '../views/AdoptionRegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/pets',
      name: 'pets',
      component: () => import('../views/PetsView.vue')
    }, 
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    }, 
    {
      path: '/updateUser',
      name: 'update',
      component: UpdateUserView
    }, 
    {
      path: '/adoptionRegister',
      name: 'adoptionRegister',
      component: RegisterList
    }
  ]
})
router.beforeEach( (to,from,next) => {
  const usuarioLog = localStorage.getItem('usuario')
  if( to.matched.some(r => r.meta.RequireAuth) && !usuarioLog ) {
    next('/')
  }
  next()
})
export default router
