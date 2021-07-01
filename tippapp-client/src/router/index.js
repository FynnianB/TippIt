import Vue from 'vue';
import VueRouter from 'vue-router'

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
    component: () => import('@/views/Login.vue'),
    beforeEnter: loggedInRedirectToDashboard,
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    beforeEnter: isLoggedIn,
  },
  {
    path: '/games',
    name: 'Games',
    component: () => import('@/views/Games.vue'),
    beforeEnter: isLoggedIn,
  },
  {
    path: '/guess',
    name: 'Guess',
    component: () => import('@/views/Guess.vue'),
    beforeEnter: isLoggedIn,
  },
  {
    path: '/listguess',
    name: 'ListGuess',
    component: () => import('@/views/ListGuess.vue'),
    beforeEnter: isLoggedIn,
  },
  {
    path: '/listpoints',
    name: 'ListPoints',
    component: () => import('@/views/ListPoints.vue'),
    beforeEnter: isLoggedIn,
  },
]

const router = new VueRouter({
  routes
})

export default router