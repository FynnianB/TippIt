import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Games from '@/views/Games.vue'
import Guess from '@/views/Guess.vue'
import ListGuess from '@/views/ListGuess.vue'
import ListPoints from '@/views/ListPoints.vue'

Vue.use(VueRouter)

function loggedInRedirectToDashboard(to, from, next) {
  if (localStorage.user_token) {
    next({
      name: 'Dashboard'
    });
  } else {
    next();
  }
}

function isLoggedIn(to, from, next) {
  if (localStorage.user_token) {
    next();
  } else {
    next({
      name: 'Login'
    });
  }
}

const routes = [{
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: loggedInRedirectToDashboard,
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: isLoggedIn,
  },
  {
    path: '/',
    name: 'Games',
    component: Games,
    beforeEnter: isLoggedIn,
  },
  {
    path: '/',
    name: 'Guess',
    component: Guess,
    beforeEnter: isLoggedIn,
  },
  {
    path: '/',
    name: 'ListGuess',
    component: ListGuess,
    beforeEnter: isLoggedIn,
  },
  {
    path: '/',
    name: 'ListPoints',
    component: ListPoints,
    beforeEnter: isLoggedIn,
  },
]

const router = new VueRouter({
  routes
})

export default router