import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Accueil',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Inscription',
    component: () => import('../components/signup.vue')
  },
  {
    path: '/login',
    name: 'Connexion',
    component: () => import('../components/login.vue')
  },
  {
    path: '/create',
    name: 'Creationpost',
    component: () => import('../components/creationPost.vue')
  },
  {
    path: '/allPosts',
    name: 'Posts',
    component: () => import('../components/allPosts.vue')
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('../components/articleU.vue')
  },
  {
    path: '/update/:id',
    name: 'updatePost',
    component: () => import('../components/updatePost.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router